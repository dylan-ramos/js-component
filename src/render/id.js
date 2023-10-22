'use strict'

/**
 * @return {Promise<void>}
 */
const id = async function () {
  if ('' === this.id) {
    return
  }

  this.element.id = this.id
}

export default id
export { id }
