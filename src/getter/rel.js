'use strict'

import { isString } from '@dylan-ramos/js-tool'

/**
 * The rel attribute specifies the relationship between the current document and the linked document/resource.
 *
 * The rel attribute can be used on the following elements:
 * - a
 * - area
 * - link
 * - form
 *
 * @link https://www.w3schools.com/tags/att_rel.asp
 *
 * @return {''|'alternate'|'author'|'bookmark'|'canonical'|'dns-prefetch'|'external'|'first'|'help'|'icon'|'license'|'manifest'|'modulepreload'|'next'|'nofollow'|'noopener'|'noreferrer'|'opener'|'pingback'|'preconnect'|'preload'|'prefetch'|'prerender'|'prev'|'search'|'stylesheet'|'tag'} this._rel
 */
const rel = function () {
  if (!isString(this._rel)) {
    this._rel = ''
  }

  return this._rel
}

export default rel
export { rel }
