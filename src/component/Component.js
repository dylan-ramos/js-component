'use strict'

import { hydrate } from '@dylan-ramos/js-class-hydrator'
import { isString } from '@dylan-ramos/js-tool'
import renderId from '../render/id'

class Component {
  /**
   * @param {Component[]} children
   * @param {string[]} className
   * @param {Object} data
   * @param {string} id
   * @param {Object} event
   * @param {string[]} stuckProperties
   * @param {Object} props
   *
   * @return {Component}
   */
  constructor({
    children = [],
    className = [],
    data = {},
    id = '',
    event = {},
    stuckProperties = [],
    ...props
  } = {}) {
    this.hydrate = hydrate
    this.hydrate({ children, data, id, event, stuckProperties, ...props })

    this._className = className
    this._state = {
      children: this.children,
      className: this.className,
      id: this.id,
    }

    return this
  }

  /**
   * @param {string} value
   *
   * @return {Promise<Component>}
   */
  async addClassName(value) {
    if (!isString(value)) {
      throw new Error('className must be a string')
    }

    const t = this.className

    if (0 <= t.indexOf(value)) {
      return this
    }

    t.push(value)

    this._className = t

    return this
  }

  /**
   * Function that attaches data attributes to HTML elements. This function is called automatically during rendering.
   *
   * @return {Promise<Component>}
   */
  async attachData() {
    if (0 >= Object.keys(this.data).length) {
      return this
    }

    for (let key in this.data) {
      this.element.dataset[key] = this.data[key]
    }

    return this
  }

  /**
   * Function that attaches class attributes to HTML elements. This function is called automatically during rendering.
   *
   * @return {Promise<Component>}
   */
  async attachClassName() {
    const j = this.className.length

    if (0 >= j) {
      return this
    }

    for (let i = 0; i < j; i++) {
      this.element.classList.add(this.className[i])
    }

    return this
  }

  /**
   * Function that attaches or detaches events to the HTML element. This function is called automatically during rendering.
   *
   * @param {boolean} attach add or remove event
   *
   * @return {Promise<Component>}
   */
  async handleEvent(attach = true) {
    const keys = Object.keys(this.event)
    const j = keys.length

    if (0 >= j) {
      return this
    }

    const mode = attach ? 'addEventListener' : 'removeEventListener'

    for (let i = 0; i < j; i++) {
      for (let k = 0, l = this.event[keys[i]].length; k < l; k++) {
        this.element[mode](keys[i], this.event[keys[i]][k], false)
      }
    }

    return this
  }

  /**
   * @return {Promise<Component>}
   */
  async insertChildren() {
    const j = this.children.length

    if (0 >= j) {
      return this
    }

    for (let i = 0; i < j; i++) {
      this.element.appendChild(await this.children[i].render())
    }

    return this
  }

  /**
   * @param {string} value
   *
   * @return {Promise<Component>}
   */
  async removeClassName(value) {
    if (!isString(value)) {
      throw new Error('className must be a string')
    }

    const t = this.className
    const i = t.indexOf(value)

    if (0 > i) {
      return this
    }

    t.splice(i, 1)

    this._className = t
    this.element.classList.remove(value)

    return this
  }

  async render() {
    await this.handleEvent(false)
    await Promise.all([
      this.attachClassName(),
      this.attachData(),
      this.handleEvent(),
      this.insertChildren(),
      renderId.call(this),
    ])

    return this.element
  }

  /**
   * @param {Object} value
   *
   * @return {Promise<Component>}
   */
  async setState(value) {
    for (let key in value) {
      if (0 <= this.stuckProperties.indexOf(key)) {
        delete value[key]

        continue
      }

      if (!value.hasOwnProperty(key) || !this.state.hasOwnProperty(key)) {
        continue
      }

      this.state[key] = value[key]
    }

    this.hydrate(value)

    await this.render()

    return this
  }

  /**
   * @return {Component[]} this._children
   */
  get children() {
    if (!Array.isArray(this._children)) {
      this._children = []
    }

    return this._children
  }

  /**
   * @param {Component[]} value
   */
  set children(value) {
    if (!Array.isArray(value)) {
      throw new Error('children must be an array')
    }

    this._children = value
  }

  /**
   * @return {string[]}
   */
  get className() {
    if (!Array.isArray(this._className)) {
      this._className = []
    }

    return this._className
  }

  /**
   * @param {string[]} value
   */
  set className(value) {
    throw new Error(
      'Do not try to set the "className" property. Please use the "addClassName" or "removeClassName" functions.',
    )
  }

  /**
   * @return {Object} this._data
   */
  get data() {
    if (typeof this._data !== 'object') {
      this._data = {}
    }

    return this._data
  }

  /**
   * A simple object {foo: 'bar'} is used to create the "data" attributes of the HTML element data-foo="bar".
   *
   * @param {Object} value
   */
  set data(value) {
    if (typeof value !== 'object') {
      throw new Error('data must be an object')
    }

    this._data = value
  }

  get element() {
    if (typeof this._element === 'undefined') {
      this._element = document.createElement('div')
    }

    return this._element
  }

  /**
   * @param value
   */
  set element(value) {
    throw new Error('Do not try to set the `element` property')
  }

  /**
   * @return {Object} this._event
   */
  get event() {
    if (typeof this._event !== 'object') {
      this._event = {}
    }

    return this._event
  }

  /**
   * @param {Object} value {
   *   click: [
   *     function1,
   *     function2,
   *     ...
   *   ],
   *   hover: [],
   *   ...
   * }
   */
  set event(value) {
    if (typeof value !== 'object') {
      throw new Error('event must be an object')
    }

    this._event = value
  }

  /**
   * @return {string} this._id
   */
  get id() {
    if (!isString(this._id)) {
      this._id = ''
    }

    return this._id
  }

  /**
   * @param {string} value
   */
  set id(value) {
    if (!isString(value)) {
      throw new Error('id must be a string')
    }

    this._id = value
  }

  /**
   * @return {Object} this._props
   */
  get props() {
    if (typeof this._props !== 'object') {
      this._props = {}
    }

    return this._props
  }

  /**
   * @param {Object} value
   */
  set props(value) {
    if (typeof value !== 'object') {
      throw new Error('props must be an object')
    }

    this._props = value
  }

  /**
   * @return {Object} this._state
   */
  get state() {
    if (typeof this._state !== 'object') {
      this._state = {}
    }

    return this._state
  }

  /**
   * @param {Object} value
   */
  set state(value) {
    throw new Error('Do not try to set the `state` property')
  }

  /**
   * @return {string[]} this._stuckProperties
   */
  get stuckProperties() {
    if (!Array.isArray(this._stuckProperties)) {
      this._stuckProperties = []
    }

    return this._stuckProperties
  }

  /**
   * @param {Array|string} value
   */
  set stuckProperties(value) {
    if (!Array.isArray(value) && !isString(value)) {
      throw new Error('stuckProperties must be an array or a string')
    }

    if (Array.isArray(value)) {
      this._stuckProperties = value
    } else if (isString(value)) {
      if (!Array.isArray(this._stuckProperties)) {
        this._stuckProperties = []
      }

      this._stuckProperties.push(value)
    }
  }
}

export default Component
export { Component }
