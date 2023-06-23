import { CurrcashError } from '../handlers/currcashError'

// ___ $ Constants ___
import { ALLOWED_SEPARATOR_VALUES } from '../../constants/constants'

export const validateSeparators = (separators: any) => {
  if (!Array.isArray(separators)) {
    throw new CurrcashError(
      'InvalidType: separators must be of type <array>'
    )
  }
  if (separators.length < 1 || separators.length > 2) {
    throw new CurrcashError(
      'SeparatorError: separators standby [min = 1] || [max = 2]'
    )
  }

  const areValidDataTypes = separators.every(
    (separator: any) => typeof separator === 'string'
  )

  if (!areValidDataTypes) {
    throw new CurrcashError(
      'SeparatorError: each separator must be of type <string>'
    )
  }

  const areValidValues = separators.every((separator: string) => {
    return ALLOWED_SEPARATOR_VALUES.includes(separator)
  })

  if (!areValidValues) {
    throw new CurrcashError(
      'SeparatorError: some separator has an invalid value'
    )
  }
}
