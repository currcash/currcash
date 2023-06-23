import { CurrcashError } from '../handlers/currcashError'

export const validatePrecision = (precision: any) => {
  if (typeof precision !== 'number') {
    throw new CurrcashError(
      'InvalidType: precision must be of type <number>'
    )
  }

  if (precision < -1 || precision > 10) {
    throw new CurrcashError(
      'PrecisionError: precision allows as values [-1 to 10]'
    )
  }
}
