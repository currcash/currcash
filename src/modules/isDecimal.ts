import { CurrcashError } from '../utils/handlers/currcashError'
import { validateValue } from '../utils/validations/validateValue'
import { isInteger } from './isInteger'

export function isDecimal(value: number) {
  const TOTAL_ARGS = arguments.length

  if (TOTAL_ARGS !== 1) {
    throw new CurrcashError('ArgumentsError: total invalid arguments')
  }

  // Validation
  validateValue(value, false)

  try {
    return !isInteger(value)
  } catch (err: any) {
    if (err instanceof CurrcashError) {
      console.error(err)
    }
  }
}
