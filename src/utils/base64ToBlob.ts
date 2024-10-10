/**
 * 定义将Base64转换为Blob的函数
 *
 * @param {string} base64Data
 * @param {string} contentType
 * @returns {Blob}
 */
export const base64ToBlob = (base64Data: string, contentType?: string): Blob | null => {
  contentType = contentType || '';
  const sliceSize = 512;
  const byteCharacters = safeAtob(base64Data);
  if (byteCharacters == null) {
    console.log('解码失败', base64Data);
    return null;
  }
  const byteArrays: Uint8Array[] = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: contentType });
};

function safeAtob(base64: string) {
  try {
    return window.atob(base64);
  } catch (error) {
    console.error('解码失败:', error);
    // 处理错误或返回默认值
    return null;
  }
}
