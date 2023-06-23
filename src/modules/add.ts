import Decimal from 'decimal.js-light'
import { CurrcashError } from '../utils/handlers/currcashError'
import { validateValue } from '../utils/validations/validateValue'

export function add(values: number[]) {
  const TOTAL_ARGS = arguments.length

  if (TOTAL_ARGS > 1) {
    throw new CurrcashError('ArgumentsError: total invalid arguments')
  }

  // Validation: values
  if (values.length === 0) {
    throw new CurrcashError(
      'ValuesError: values must have at least one numeric value'
    )
  }

  values.forEach((value: number): void => {
    validateValue(value)
  })

  try {
    const firstValue = values[0]

    if (values.length === 1) {
      return firstValue
    }

    let decimal: Decimal = new Decimal(0)

    for (const value of values) {
      decimal = decimal.plus(value)
    }

    return +decimal.val()
  } catch (err: any) {
    if (err instanceof CurrcashError) {
      console.error(err)
    }
  }
}
