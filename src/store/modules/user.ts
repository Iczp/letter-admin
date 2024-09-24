import { defineStore } from 'pinia';
import { store } from '../index';
import { UserLoginType, UserType } from '@/api/login/types';
import { ElMessageBox } from 'element-plus';
import { useI18n } from '@/hooks/web/useI18n';
import { loginOutApi } from '@/api/login';
import { useTagsViewStore } from './tagsView';
import router from '@/router';
import { TokenResult } from '@/client';

interface UserState {
  userInfo?: UserType;
  tokenKey: string;
  token: TokenResult | null;
  roleRouters?: string[] | AppCustomRouteRecordRaw[];
  rememberMe: boolean;
  loginInfo?: UserLoginType;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => {
    return {
      userInfo: undefined,
      tokenKey: 'Authorization',
      token: null,
      roleRouters: undefined,
      // 记住我
      rememberMe: true,
      loginInfo: undefined
    };
  },
  getters: {
    getTokenKey(): string {
      return this.tokenKey;
    },
    getToken(): string | undefined {
      let token = this.token;
      if (!token) {
        const tokenJson = localStorage.getItem(this.tokenKey);
        if (tokenJson) {
          token = JSON.parse(tokenJson) as TokenResult | null;
        }
      }
      if (token) {
        return `${token?.token_type} ${token?.access_token}`;
      }
      console.log('getToken', this.tokenKey, token);
    },
    getUserInfo(): UserType | undefined {
      return this.userInfo;
    },
    getRoleRouters(): string[] | AppCustomRouteRecordRaw[] | undefined {
      return this.roleRouters;
    },
    getRememberMe(): boolean {
      return this.rememberMe;
    },
    getLoginInfo(): UserLoginType | undefined {
      return this.loginInfo;
    }
  },
  actions: {
    setTokenKey(tokenKey: string) {
      this.tokenKey = tokenKey;
    },
    setToken(token: TokenResult | null) {
      if (token && !token.creation_time) {
        token.creation_time = new Date().toISOString();
      }
      console.log('token', this.tokenKey, token);
      localStorage.setItem(this.tokenKey, JSON.stringify(token));
      this.token = token;
    },
    setUserInfo(userInfo?: UserType) {
      this.userInfo = userInfo;
    },
    setRoleRouters(roleRouters: string[] | AppCustomRouteRecordRaw[]) {
      this.roleRouters = roleRouters;
    },
    logoutConfirm() {
      const { t } = useI18n();
      ElMessageBox.confirm(t('common.loginOutMessage'), t('common.reminder'), {
        confirmButtonText: t('common.ok'),
        cancelButtonText: t('common.cancel'),
        type: 'warning'
      })
        .then(async () => {
          const res = await loginOutApi().catch(() => {});
          if (res) {
            this.reset();
          }
        })
        .catch(() => {});
    },
    reset() {
      const tagsViewStore = useTagsViewStore();
      tagsViewStore.delAllViews();
      this.setToken(null);
      this.setUserInfo(undefined);
      this.setRoleRouters([]);
      router.replace('/login');
    },
    logout() {
      this.reset();
    },
    setRememberMe(rememberMe: boolean) {
      this.rememberMe = rememberMe;
    },
    setLoginInfo(loginInfo: UserLoginType | undefined) {
      this.loginInfo = loginInfo;
    }
  },
  persist: true
});

export const useUserStoreWithOut = () => {
  return useUserStore(store);
};
