'use strict'

/**
 * @return {Promise<void>}
 */
const value = async function () {
  if ('' === this.value) {
    return
  }

  this.element.setAttribute('value', this.value)
}

export default value
export { value }
