// ___ $ Base ___
import Decimal from 'decimal.js-light'

// ___ $ Types ___
import { type Currency } from './types/currency'

// ___ $ Utils -> Handlers ___
import { CurrcashError } from './utils/handlers/currcashError'

// ___ $ Utils -> Validations ___
import { validateValue } from './utils/validations/validateValue'
import { validatePrecision } from './utils/validations/validatePrecision'
import { validateSeparators } from './utils/validations/validateSeparators'

// ___ $ Modules ___
import { isInteger } from './modules/isInteger'
import { isDecimal } from './modules/isDecimal'

/*
 * currcash v1.0.0
 * Library to work with your currency
 * https://github.com/currcash/currcash
 * Copyright (c) 2023 currcash
 * MIT Licence
 */

export default class Currcash {
  value?: number
  precision?: number
  separators?: string[]

  constructor(
    { value = 0, precision = -1, separators = ['.', ','] }: Currency = {
      value: 0,
      precision: -1,
      separators: ['.', ',']
    }
  ) {
    const TOTAL_ARGS = arguments.length

    if (TOTAL_ARGS > 1) {
      throw new CurrcashError('ArgumentsError: total invalid arguments')
    }

    // Validations
    validateValue(value)
    validatePrecision(precision)
    validateSeparators(separators)

    try {
      this.value = value
      this.precision = precision
      this.separators = separators

      return this
    } catch (err: any) {
      console.error(err)
    }
  }

  public val() {
    const TOTAL_ARGS = arguments.length

    if (TOTAL_ARGS !== 0) {
      throw new CurrcashError('ArgumentsError: total invalid arguments')
    }

    try {
      return this.value
    } catch (err: any) {
      console.error(err)
    }
  }

  public setValue(value: number) {
    const TOTAL_ARGS = arguments.length

    if (TOTAL_ARGS !== 1) {
      throw new CurrcashError('ArgumentsError: total invalid arguments')
    }

    // Validation
    validateValue(value)

    try {
      this.value = value

      return this
    } catch (err: any) {
      console.error(err)
    }
  }

  public setPrecision(precision: number) {
    const TOTAL_ARGS = arguments.length

    if (TOTAL_ARGS !== 1) {
      throw new CurrcashError('ArgumentsError: total invalid arguments')
    }

    // Validation
    validatePrecision(precision)

    try {
      this.precision = precision

      return this
    } catch (err: any) {
      console.error(err)
    }
  }

  public setSeparators(separators: string[]) {
    const TOTAL_ARGS = arguments.length

    if (TOTAL_ARGS !== 1) {
      throw new CurrcashError('ArgumentsError: total invalid arguments')
    }

    // Validation
    validateSeparators(separators)

    try {
      this.separators = separators

      return this
    } catch (err: any) {
      console.error(err)
    }
  }

  // Getters
  public getValue() {
    const TOTAL_ARGS = arguments.length

    if (TOTAL_ARGS !== 0) {
      throw new CurrcashError('ArgumentsError: total invalid arguments')
    }

    try {
      return this.value
    } catch (err: any) {
      console.error(err)
    }
  }

  public getPrecision() {
    const TOTAL_ARGS = arguments.length

    if (TOTAL_ARGS !== 0) {
      throw new CurrcashError('ArgumentsError: total invalid arguments')
    }

    try {
      return this.precision
    } catch (err: any) {
      console.error(err)
    }
  }

  public getSeparators() {
    const TOTAL_ARGS = arguments.length

    if (TOTAL_ARGS !== 0) {
      throw new CurrcashError('ArgumentsError: total invalid arguments')
    }

    try {
      return this.separators
    } catch (err: any) {
      console.error(err)
    }
  }

  public add(value: number = 0) {
    const TOTAL_ARGS = arguments.length

    if (TOTAL_ARGS > 1) {
      throw new CurrcashError('ArgumentsError: total invalid arguments')
    }

    // Validation
    if (TOTAL_ARGS === 1) {
      validateValue(value)
    }

    try {
      if (TOTAL_ARGS === 0) {
        return this
      }

      this.value = +new Decimal(this.value ?? 0).plus(value).val()

      return this
    } catch (err: any) {
      console.error(err)
    }
  }

  public sub(value: number = 0) {
    const TOTAL_ARGS = arguments.length

    if (TOTAL_ARGS > 1) {
      throw new CurrcashError('ArgumentsError: total invalid arguments')
    }

    // Validation
    if (TOTAL_ARGS === 1) {
      validateValue(value)
    }

    try {
      if (TOTAL_ARGS === 0) {
        return this
      }

      this.value = +new Decimal(this.value ?? 0).minus(value).val()

      return this
    } catch (err: any) {
      console.error(err)
    }
  }

  public multiply(value: number = 1) {
    const TOTAL_ARGS = arguments.length

    if (TOTAL_ARGS > 1) {
      throw new CurrcashError('ArgumentsError: total invalid arguments')
    }

    // Validation
    if (TOTAL_ARGS === 1) {
      validateValue(value)
    }

    try {
      if (TOTAL_ARGS === 0) {
        return this
      }

      let temporaryValue = 1

      if (typeof this.value !== 'undefined' && this.value !== 0) {
        temporaryValue = this.value
      }

      this.value = +new Decimal(temporaryValue ?? 1).times(value).val()

      return this
    } catch (err: any) {
      console.error(err)
    }
  }

  public divideBy(value: number = 1) {
    const TOTAL_ARGS = arguments.length

    if (TOTAL_ARGS > 1) {
      throw new CurrcashError('ArgumentsError: total invalid arguments')
    }

    // Validation
    if (TOTAL_ARGS === 1) {
      if (isDecimal(value)) {
        validateValue(value, false)
      } else {
        validateValue(value, true)
      }
    }

    try {
      if (TOTAL_ARGS === 0 || (TOTAL_ARGS === 1 && value === 1)) {
        return this
      }

      this.value = +new Decimal(this.value ?? 1)
        .dividedBy(value)
        .val()

      return this
    } catch (err: any) {
      console.error(err)
    }
  }

  public isDecimal() {
    const TOTAL_ARGS = arguments.length

    if (TOTAL_ARGS !== 0) {
      throw new CurrcashError('ArgumentsError: total invalid arguments')
    }

    return isDecimal(this.value ?? 0)
  }

  public isInteger() {
    const TOTAL_ARGS = arguments.length

    if (TOTAL_ARGS !== 0) {
      throw new CurrcashError('ArgumentsError: total invalid arguments')
    }

    return isInteger(this.value ?? 0)
  }

  static isDecimal(value: number) {
    const TOTAL_ARGS = arguments.length

    if (TOTAL_ARGS !== 1) {
      throw new CurrcashError('ArgumentsError: total invalid arguments')
    }

    return isDecimal(value)
  }

  static isInteger(value: number) {
    const TOTAL_ARGS = arguments.length

    if (TOTAL_ARGS !== 1) {
      throw new CurrcashError('ArgumentsError: total invalid arguments')
    }

    return isInteger(value)
  }
}

export { type Currency, CurrcashError, isInteger, isDecimal }

export { add } from './modules/add'
export { sub } from './modules/sub'
export { multiply } from './modules/multiply'
export { divide } from './modules/divide'
