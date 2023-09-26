/**
 *
 */
exports.parseHash = function (urlHash = window.location.hash, dict = {}) {
  const hexRegex = /^[0-9A-Fa-f]+$/
  const parts = urlHash.split('/')

  const result = {
    isAdmin: false,
    order: [],
    dict: null
  }

  for (let i = 0; i < parts.length; i++) {
    if (parts[i] === 'admin') {
      result.isAdmin = true
    } else if (dict[parts[i]] !== undefined) {
      result.dict = dict[parts[i]]
    } else if (hexRegex.test(parts[i])) {
      result.order = parts[i].match(/.{1,2}/g).map(byte => parseInt(byte, 16))
    }
  }

  if (result.dict === null) {
    result.dict = dict.default || dict
  }

  return result
}
