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
 * @param {''|'alternate'|'author'|'bookmark'|'canonical'|'dns-prefetch'|'external'|'first'|'help'|'icon'|'license'|'manifest'|'modulepreload'|'next'|'nofollow'|'noopener'|'noreferrer'|'opener'|'pingback'|'preconnect'|'preload'|'prefetch'|'prerender'|'prev'|'search'|'stylesheet'|'tag'|string[]} value
 *
 * @throws {Error}
 */
const rel = function (value) {
  if (!Array.isArray(value) && !isString(value)) {
    throw new Error('rel must be an array or a string')
  }

  const l = [
    '',
    'alternate',
    'author',
    'bookmark',
    'canonical',
    'dns-prefetch',
    'external',
    'first',
    'help',
    'icon',
    'license',
    'manifest',
    'modulepreload',
    'next',
    'nofollow',
    'noopener',
    'noreferrer',
    'opener',
    'pingback',
    'preconnect',
    'prefetch',
    'preload',
    'prerender',
    'prev',
    'search',
    'stylesheet',
    'tag',
  ]

  if (isString(value)) {
    value = [value]
  }

  let rel = ''
  for (let i = 0, j = value.length; i < j; i++) {
    if (!isString(value[i])) {
      throw new Error('The rel array must contain strings only.')
    }

    if (0 > l.indexOf(value[i])) {
      throw new Error('rel must be a valid string')
    }

    if ('' === value) {
      continue
    }

    if ('' !== rel) {
      rel += ' '
    }

    rel += value[i]
  }

  this._rel = value
}

export default rel
export { rel }
