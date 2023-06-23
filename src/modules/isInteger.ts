import { CurrcashError } from '../utils/handlers/currcashError'
import { validateValue } from '../utils/validations/validateValue'

export function isInteger(value: number) {
  const TOTAL_ARGS = arguments.length

  if (TOTAL_ARGS !== 1) {
    throw new CurrcashError('ArgumentsError: total invalid arguments')
  }

  // Validation
  validateValue(value, false)

  try {
    return !(value % 1 !== 0)
  } catch (err: any) {
    if (err instanceof CurrcashError) {
      console.error(err)
    }
  }
}
