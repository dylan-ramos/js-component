'use strict'

import { isString } from '@dylan-ramos/js-tool'

/**
 * The download attribute specifies that the target will be downloaded when a user clicks on the hyperlink.
 *
 * The download attribute can be used on the following elements:
 * - a
 * - area
 *
 * @link https://www.w3schools.com/tags/att_download.asp
 *
 * @param {string} value
 */
const download = function (value) {
  if (!isString(value)) {
    throw new Error('download must be a string')
  }

  this._download = value
}

export default download
export { download }
