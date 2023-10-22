'use strict'

/**
 * @return {Promise<void>}
 */
const type = async function () {
  if ('' === this.type) {
    return
  }

  this.element.setAttribute('type', this.type)
}

export default type
export { type }
