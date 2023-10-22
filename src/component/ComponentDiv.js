'use strict'

import { Component } from './Component'
import getHtml from '../getter/html'
import setHtml from '../setter/html'
import getText from '../getter/text'
import setText from '../setter/text'
import renderHtml from '../render/html'
import renderText from '../render/text'

class ComponentDiv extends Component {
  /**
   * @param {string} html
   * @param {string} text
   * @param {Object} props
   *
   * @return {ComponentDiv}
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

    this._element = document.createElement('div')
    this._state = { html: this.html, text: this.text }

    return this
  }

  /**
   * @return {Promise<HTMLDivElement>}
   */
  async render() {
    await super.render()

    await Promise.all([renderHtml.call(this), renderText.call(this)])

    return this.element
  }

  /**
   * @return {HTMLDivElement}
   */
  get element() {
    if (typeof this._element === 'undefined') {
      this._element = document.createElement('div')
    }

    return this._element
  }
}

export default ComponentDiv
export { ComponentDiv }
