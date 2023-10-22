'use strict'

/**
 * @return {Promise<void>}
 */
const name = async function () {
  if ('' === this.name) {
    return
  }

  this.element.setAttribute('name', this.name)
}

export default name
export { name }
