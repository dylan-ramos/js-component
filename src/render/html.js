'use strict'

/**
 * @return {Promise<void>}
 */
const html = async function () {
  if ('' === this.html) {
    return
  }

  this.element.innerHTML = this.html
}

export default html
export { html }
