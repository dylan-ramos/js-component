'use strict'

import { isString } from '@dylan-ramos/js-tool'

/**
 * The target attribute can be used on the following elements:
 * - a
 * - area
 * - base
 * - form
 *
 * @link https://www.w3schools.com/tags/att_target.asp
 *
 * @param {''|'_blank'|'_parent'|'_self'|'_top'|'framename'} value
 *
 * @throws {Error}
 */
const target = function (value) {
  if (!isString(value)) {
    throw new Error('target must be a string')
  }

  const l = ['', '_blank', '_parent', '_self', '_top', 'framename']

  if (0 > l.indexOf(value)) {
    throw new Error('target must be a valid string')
  }

  this._target = value
}

export default target
export { target }
