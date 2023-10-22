'use strict'

import { isString } from '@dylan-ramos/js-tool'

/**
 * The value attribute can be used on the following elements:
 * - button
 * - input
 * - meter
 * - li
 * - option
 * - progress
 * - param
 *
 * @link https://www.w3schools.com/tags/att_value.asp
 *
 * @return {string} this._value
 */
const value = function () {
  if (!isString(this._value)) {
    this._value = ''
  }

  return this._value
}

export default value
export { value }
