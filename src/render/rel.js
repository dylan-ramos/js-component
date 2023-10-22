'use strict'

/**
 * @return {Promise<void>}
 */
const rel = async function () {
  if ('' === this.rel) {
    return
  }

  this.element.setAttribute('rel', this.rel)
}

export default rel
export { rel }
