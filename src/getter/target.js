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
 * @return {''|'_blank'|'_parent'|'_self'|'_top'|'framename'} this._target
 */
const target = function () {
  if (!isString(this._target)) {
    this._target = ''
  }

  return this._target
}

export default target
export { target }
