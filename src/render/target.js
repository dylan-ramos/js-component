'use strict'

/**
 * @return {Promise<void>}
 */
const target = async function () {
  if ('' === this.target) {
    return
  }

  this.element.setAttribute('target', this.target)
}

export default target
export { target }
