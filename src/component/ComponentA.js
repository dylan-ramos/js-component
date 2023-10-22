'use strict'

import { Component } from './Component'
import getDownload from '../getter/download'
import setDownload from '../setter/download'
import getHref from '../getter/href'
import setHref from '../setter/href'
import getHreflang from '../getter/hreflang'
import setHreflang from '../setter/hreflang'
import getHtml from '../getter/html'
import setHtml from '../setter/html'
import getRel from '../getter/rel'
import setRel from '../setter/rel'
import getTarget from '../getter/target'
import setTarget from '../setter/target'
import getText from '../getter/text'
import setText from '../setter/text'
import getType from '../getter/type'
import setType from '../setter/type'
import renderDownload from '../render/download'
import renderHref from '../render/href'
import renderHreflang from '../render/hreflang'
import renderHtml from '../render/html'
import renderRel from '../render/rel'
import renderTarget from '../render/target'
import renderText from '../render/text'
import renderType from '../render/type'

class ComponentA extends Component {
  /**
   * @param {string} download
   * @param {string} href
   * @param {string} hreflang
   * @param {string} html
   * @param {''|'alternate'|'author'|'bookmark'|'canonical'|'dns-prefetch'|'external'|'first'|'help'|'icon'|'license'|'manifest'|'modulepreload'|'next'|'nofollow'|'noopener'|'noreferrer'|'opener'|'pingback'|'preconnect'|'preload'|'prefetch'|'prerender'|'prev'|'search'|'stylesheet'|'tag'|string[]} rel
   * @param {''|'_blank'|'_parent'|'_self'|'_top'|'framename'} target
   * @param {string} text
   * @param {string} type
   * @param {Object} props
   *
   * @return {ComponentA}
   */
  constructor({
    download = '',
    href = '',
    hreflang = '',
    html = '',
    rel = '',
    target = '',
    text = '',
    type = '',
    ...props
  }) {
    super(props)

    Object.defineProperties(Object.getPrototypeOf(this), {
      download: {
        configurable: true,
        enumerable: true,
        get: getDownload,
        set: setDownload,
      },
      href: {
        configurable: true,
        enumerable: true,
        get: getHref,
        set: setHref,
      },
      hreflang: {
        configurable: true,
        enumerable: true,
        get: getHreflang,
        set: setHreflang,
      },
      html: {
        configurable: true,
        enumerable: true,
        get: getHtml,
        set: setHtml,
      },
      rel: {
        configurable: true,
        enumerable: true,
        get: getRel,
        set: setRel,
      },
      target: {
        configurable: true,
        enumerable: true,
        get: getTarget,
        set: setTarget,
      },
      text: {
        configurable: true,
        enumerable: true,
        get: getText,
        set: setText,
      },
      type: {
        configurable: true,
        enumerable: true,
        get: getType,
        set: setType,
      },
    })

    this.hydrate({
      download,
      href,
      hreflang,
      html,
      rel,
      target,
      text,
      type,
    })

    this._element = document.createElement('a')
    this._state = {
      download: this.download,
      href: this.href,
      hreflang: this.hreflang,
      html: this.html,
      rel: this.rel,
      target: this.target,
      text: this.text,
      type: this.type,
    }

    return this
  }

  /**
   * @return {Promise<HTMLAnchorElement>}
   */
  async render() {
    await super.render()

    await Promise.all([
      renderDownload.call(this),
      renderHref.call(this),
      renderHreflang.call(this),
      renderHtml.call(this),
      renderRel.call(this),
      renderTarget.call(this),
      renderText.call(this),
      renderType.call(this),
    ])

    return this.element
  }

  /**
   * @return {HTMLAnchorElement} this._element
   */
  get element() {
    if (typeof this._element === 'undefined') {
      this._element = document.createElement('a')
    }

    return this._element
  }
}

export default ComponentA
export { ComponentA }
