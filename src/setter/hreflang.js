'use strict'

import { isString } from '@dylan-ramos/js-tool'

/**
 * The hreflang attribute specifies the language of the linked document.
 *
 * The hreflang attribute can be used on the following elements:
 * - a
 * - area
 * - link
 *
 * @link https://www.w3schools.com/tags/att_hreflang.asp
 *
 * @param {string} value
 */
const hreflang = function (value) {
  if (!isString(value)) {
    throw new Error('hreflang must be a string')
  }

  this._hreflang = value
}

export default hreflang
export { hreflang }
