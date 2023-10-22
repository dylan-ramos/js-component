'use strict'

import { isBool } from '@dylan-ramos/js-tool'

/**
 * The Boolean disabled attribute, when present, makes the element not mutable, focusable, or even submitted with the form.
 *
 * The disabled attribute can be used on the following elements:
 * - button
 * - fieldset
 * - input
 * - optgroup
 * - option
 * - select
 * - textarea
 *
 * @link https://www.w3schools.com/tags/att_disabled.asp
 *
 * @param {boolean} value
 *
 * @throws {Error}
 */
const disabled = function (value) {
  if (!isBool(value)) {
    throw new Error('disabled must be a boolean')
  }

  this._disabled = value
}

export default disabled
export { disabled }
