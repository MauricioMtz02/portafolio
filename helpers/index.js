export const cutContent = (str, length = 50) => {
  return str.length > length ? `${str.substring(0, length)}...` : str
}