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
 * @param {string} value
 *
 * @throws {Error}
 */
const value = function (value) {
  if (!isString(value)) {
    throw new Error('value must be a string')
  }

  this._value = value
}

export default value
export { value }
