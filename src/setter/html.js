'use strict'

import { isString } from '@dylan-ramos/js-tool'

/**
 * @param {string} value
 *
 * @throws {Error}
 */
const html = function (value) {
  if (!isString(value)) {
    throw new Error('html must be a string')
  }

  this._html = value

  if ('' === this._html) {
    return
  }

  if (
    typeof this.children !== 'undefined' &&
    Array.isArray(this.children) &&
    0 < this.children.length
  ) {
    throw new Error(
      'You cannot add HTML to a component that contains children. Remove the children or add the HTML to the last child.',
    )
  }

  if (typeof this._text === 'string' && '' !== this._text) {
    throw new Error(
      'You cannot add HTML to a component that contains text. Remove the text content before adding HTML.',
    )
  }
}

export default html
export { html }
