'use strict'

/**
 * @return {Promise<void>}
 */
const href = async function () {
  if ('' === this.href) {
    return
  }

  this.element.href = this.href
}

export default href
export { href }
