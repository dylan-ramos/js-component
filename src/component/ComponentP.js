'use strict'

import { Component } from './Component'
import getHtml from '../getter/html'
import setHtml from '../setter/html'
import getText from '../getter/text'
import setText from '../setter/text'
import renderHtml from '../render/html'
import renderText from '../render/text'

class ComponentP extends Component {
  /**
   * @param {string} html
   * @param {string} text
   * @param {Object} props
   *
   * @return {ComponentP}
   */
  constructor({ html = '', text = '', ...props }) {
    super(props)

    Object.defineProperties(Object.getPrototypeOf(this), {
      html: {
        configurable: true,
        enumerable: true,
        get: getHtml,
        set: setHtml,
      },
      text: {
        configurable: true,
        enumerable: true,
        get: getText,
        set: setText,
      },
    })

    this.hydrate({
      html,
      text,
    })

    this._element = document.createElement('p')
    this._state = { html: this.html, text: this.text }

    return this
  }

  /**
   * @return {Promise<HTMLParagraphElement>}
   */
  async render() {
    await super.render()

    await Promise.all([renderHtml.call(this), renderText.call(this)])

    return this.element
  }

  /**
   * @return {HTMLParagraphElement}
   */
  get element() {
    if (typeof this._element === 'undefined') {
      this._element = document.createElement('p')
    }

    return this._element
  }
}

export default ComponentP
export { ComponentP }
