'use strict'

import { isString } from '@dylan-ramos/js-tool'

/**
 * The media type. Look at IANA Media Types for a complete list of standard media types.
 *
 * The type attribute can be used on the following elements:
 * - a
 * - embed
 * - link
 * - object
 * - script
 * - source
 * - style
 *
 * @link https://www.w3schools.com/tags/att_type.asp
 * @link https://www.iana.org/assignments/media-types/media-types.xhtml
 *
 * @return {string} this._type
 */
const type = function () {
  if (!isString(this._type)) {
    this._type = ''
  }

  return this._type
}

export default type
export { type }
