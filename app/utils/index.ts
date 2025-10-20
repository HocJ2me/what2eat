export function replaceText(text?: string) {
  return text?.replace('的做法', '') || 'gì'
}

export function getOriginRecipeLink(source_path?: string) {
  if (!source_path)
    return ''

  return `https://cook.aiursoft.cn/${source_path?.replace('.md', '')}`
}

// Kiểm tra có phải PC không
export function isPC() {
  return !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
