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
 * @return {string} this._download
 */
const download = function () {
  if (!isString(this._download)) {
    this._download = ''
  }

  return this._download
}

export default download
export { download }
