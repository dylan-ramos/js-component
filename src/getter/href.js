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
 * @return {string} this._href
 */
const href = function () {
  if (!isString(this._href)) {
    this._href = ''
  }

  return this._href
}

export default href
export { href }
