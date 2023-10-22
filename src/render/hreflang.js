'use strict'

/**
 * @return {Promise<void>}
 */
const hreflang = async function () {
  if ('' === this.hreflang) {
    return
  }

  this.element.hreflang = this.hreflang
}

export default hreflang
export { hreflang }
