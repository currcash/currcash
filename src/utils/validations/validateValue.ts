import { CurrcashError } from '../handlers/currcashError'

export const validateValue = (
  value: any,
  isDivision: boolean = false
) => {
  if (typeof value !== 'number') {
    throw new CurrcashError(
      'InvalidType: value must be of type <number>'
    )
  }

  if (isDivision) {
    if (value === 0) {
      throw new CurrcashError('ValueError: cannot be divided by zero')
    }
  }
}
