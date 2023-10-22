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
 * @param {string} value
 *
 * @throws {Error}
 */
const type = function (value) {
  if (!isString(value)) {
    throw new Error('type must be a string')
  }

  this._type = value
}

export default type
export { type }
