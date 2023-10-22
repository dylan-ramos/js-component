'use strict'

/**
 * @return {Promise<void>}
 */
const download = async function () {
  if ('' === this.download) {
    return
  }

  this.element.setAttribute('download', this.download)
}

export default download
export { download }
