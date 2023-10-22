'use strict'

import { isString } from '@dylan-ramos/js-tool'

/**
 * The href attribute can be used on the following elements:
 * - a
 * - area
 * - base
 * - link
 *
 * @link https://www.w3schools.com/tags/att_href.asp
 *
 * @param {string} value
 */
const href = function (value) {
  if (!isString(value)) {
    throw new Error('href must be a string')
  }

  this._href = value
}

export default href
export { href }
