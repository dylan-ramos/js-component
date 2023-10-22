'use strict'

import { isString } from '@dylan-ramos/js-tool'

/**
 * @param {string} value
 *
 * @throws {Error}
 */
const text = function (value) {
  if (!isString(value)) {
    throw new Error('text must be a string')
  }

  this._text = value

  if ('' === this._text) {
    return
  }

  if (
    typeof this.children !== 'undefined' &&
    Array.isArray(this.children) &&
    0 < this.children.length
  ) {
    throw new Error(
      'You cannot add text to a component that contains children. Remove the children or add the text to the last child.',
    )
  }

  if (typeof this._html === 'string' && '' !== this._html) {
    throw new Error(
      'You cannot add text to a component that contains HTML. Remove the HTML content to be able to add the text content.',
    )
  }
}
export default text
export { text }
