'use strict'

import { isString } from '@dylan-ramos/js-tool'

/**
 * @return {string} this._html
 */
const html = function () {
  if (!isString(this._html)) {
    this._html = ''
  }

  return this._html
}

export default html
export { html }
