const hexRegex = /^[0-9A-Fa-f]+$/

/**
 *
 */
function parseHash (urlHash = window.location.hash, dict = {}) {
  const parts = urlHash.split('/')

  const result = {
    isAdmin: false,
    order: [],
    dict: {}
  }

  // Step 2: Loop through the split parts
  for (let i = 0; i < parts.length; i++) {
    // Step 3: Check for the word 'admin'
    if (parts[i] === 'admin') {
      result.isAdmin = true
    } else if (dict[parts[i]] !== undefined) {
      // Check if the part is in the dict
      result.dict = dict[parts[i]]
    } else if (hexRegex.test(parts[i])) {
      // GEt the order of the parts from the hex
      result.order = parts[i].match(/.{1,2}/g).map(byte => parseInt(byte, 16))
    }
  }

  return result
}

console.log({
  empty: parseHash(''),
  admin: parseHash('admin'),
  bob: parseHash('bob', { bob: true }),
  noBob: parseHash('ted', { bob: false }),
  bobAdmin: parseHash('bob/admin', { bob: true }),
  noBobAdmin: parseHash('ted/admin', { bob: false }),
  hexOnly: parseHash('0001020304'),
  hexAdmin: parseHash('09040703/admin'),
  everything: parseHash('bob/admin/89578393', { bob: true })
})
