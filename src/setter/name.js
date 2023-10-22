'use strict'

import { isString } from '@dylan-ramos/js-tool'

/**
 * The name attribute can be used on the following elements:
 * - button
 * - fieldset
 * - form
 * - iframe
 * - input
 * - map
 * - meta
 * - object
 * - output
 * - param
 * - select
 * - textarea
 *
 * @link https://www.w3schools.com/tags/att_name.asp
 *
 * @param {string} value
 *
 * @throws {Error}
 */
const name = function (value) {
  if (!isString(value)) {
    throw new Error('name must be a string')
  }

  this._name = value
}

export default name
export { name }
