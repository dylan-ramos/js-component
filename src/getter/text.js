'use strict'

import { isString } from '@dylan-ramos/js-tool'

/**
 * @return {string} this._text
 */
const text = function () {
  if (!isString(this._text)) {
    this._text = ''
  }

  return this._text
}

export default text
export { text }
