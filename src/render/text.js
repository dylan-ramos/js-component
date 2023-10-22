'use strict'

/**
 * @return {Promise<void>}
 */
const text = async function () {
  if ('' === this.text) {
    return
  }

  this.element.innerText = ''
  this.element.appendChild(document.createTextNode(this.text))
}

export default text
export { text }
