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
 * @return {string} this._hreflang
 */
const hreflang = function () {
  if (!isString(this._hreflang)) {
    this._hreflang = ''
  }

  return this._hreflang
}

export default hreflang
export { hreflang }
