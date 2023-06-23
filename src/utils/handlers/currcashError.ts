// ___ $ Error Handler ___
export class CurrcashError extends Error {
  public errorType: string

  constructor(message: string) {
    super('')
    this.stack = ''
    this.errorType = message.split(': ')[0]
    this.cause = message.split(': ')[1]
  }
}
