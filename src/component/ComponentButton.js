'use strict'

import { Component } from './Component'
import { isString } from '@dylan-ramos/js-tool'
import getDisabled from '../getter/disabled'
import setDisabled from '../setter/disabled'
import getHtml from '../getter/html'
import setHtml from '../setter/html'
import getName from '../getter/name'
import setName from '../setter/name'
import getText from '../getter/text'
import setText from '../setter/text'
import getValue from '../getter/value'
import setValue from '../setter/value'
import renderDisabled from '../render/disabled'
import renderHtml from '../render/html'
import renderName from '../render/name'
import renderText from '../render/text'
import renderValue from '../render/value'

class ComponentButton extends Component {
  /**
   * @param {boolean} disabled
   * @param {string} html
   * @param {string} name
   * @param {string} text
   * @param {''|'button'|'reset'|'submit'} type
   * @param {string} value
   * @param {Object} props
   *
   * @return {ComponentButton}
   */
  constructor({
    disabled = false,
    html = '',
    name = '',
    text = '',
    type = 'button',
    value = '',
    ...props
  }) {
    super(props)

    Object.defineProperties(Object.getPrototypeOf(this), {
      disabled: {
        configurable: true,
        enumerable: true,
        get: getDisabled,
        set: setDisabled,
      },
      html: {
        configurable: true,
        enumerable: true,
        get: getHtml,
        set: setHtml,
      },
      name: {
        configurable: true,
        enumerable: true,
        get: getName,
        set: setName,
      },
      text: {
        configurable: true,
        enumerable: true,
        get: getText,
        set: setText,
      },
      value: {
        configurable: true,
        enumerable: true,
        get: getValue,
        set: setValue,
      },
    })

    this.hydrate({
      disabled,
      html,
      name,
      text,
      type,
      value,
    })

    this._element = document.createElement('button')
    this._state = {
      disabled: this.disabled,
      html: this.html,
      name: this.name,
      text: this.text,
      type: this.type,
      value: this.value,
    }

    return this
  }

  /**
   * @return {Promise<HTMLButtonElement>}
   */
  async render() {
    await super.render()

    await Promise.all([
      renderDisabled.call(this),
      renderHtml.call(this),
      renderName.call(this),
      renderText.call(this),
      renderValue.call(this),
    ])

    if ('' !== this.type) {
      this.element.setAttribute('type', this.type)
    }

    return this.element
  }

  /**
   * @return {HTMLButtonElement}
   */
  get element() {
    if (typeof this._element === 'undefined') {
      this._element = document.createElement('button')
    }

    return this._element
  }

  /**
   * The type attribute specifies the type of button.
   *
   * @link https://www.w3schools.com/tags/att_button_type.asp
   *
   * @return {''|'button'|'reset'|'submit'} this._type
   */
  get type() {
    if (!isString(this._type)) {
      this._type = ''
    }

    return this._type
  }

  /**
   * The type attribute specifies the type of button.
   *
   * @link https://www.w3schools.com/tags/att_button_type.asp
   *
   * @param {'button'|'reset'|'submit'} value
   */
  set type(value) {
    if (!isString(value)) {
      throw new Error('type must be a string')
    }

    const l = ['', 'button', 'reset', 'submit']

    if (0 > l.indexOf(value)) {
      throw new Error('type must be a valid string')
    }

    this._type = value
  }
}

export default ComponentButton
export { ComponentButton }
