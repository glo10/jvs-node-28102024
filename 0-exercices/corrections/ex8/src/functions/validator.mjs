export const isValidArticle = (item) => {
  if(
    /.+/.test(item?.title) && 
    /.+/.test(item?.description) &&
    /^https?:\/\/.+/.test(item?.link) &&
    /^https?:\/\/.+/.test(item?.enclosure)
  ) {
    return true
  }
  return false
}