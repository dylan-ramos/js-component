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
 * @return {boolean} this._disabled
 */
const disabled = function () {
  if (!isBool(this._disabled)) {
    this._disabled = false
  }

  return this._disabled
}

export default disabled
export { disabled }
