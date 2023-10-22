'use strict'

/**
 * @return {Promise<void>}
 */
const disabled = async function () {
  switch (this.disabled) {
    case true:
      await this.addClassName('disabled')
      this.element.setAttribute('disabled', 'disabled')

      break
    case false:
      await this.removeClassName('disabled')
      this.element.removeAttribute('disabled')

      break
  }
}

export default disabled
export { disabled }
