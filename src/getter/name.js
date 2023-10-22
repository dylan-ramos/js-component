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
 * @return {string} this._name
 */
const name = function () {
  if (!isString(this._name)) {
    this._name = ''
  }

  return this._name
}

export default name
export { name }
