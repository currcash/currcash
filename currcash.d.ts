// ___ $ Types ___
export type Currency = {
  value?: number;
  precision?: number;
  separators?: string[];
};

/**
 * Create a currency
 * @example
 * const currency = new Currcash()
 * // By not receiving arguments then
 * this.value = 0
 * this.precision = -1
 * this.separators = ['.', ',']
 */
export declare class Currcash {
  public value?: number;
  public precision?: number;
  public separators?: string[];

  constructor({
    value = 0,
    precision = -1,
    separators = ['.', ',']
  }: Currency);

  public setValue(): this;
  public setPrecision(): this;
  public setSeparators(): this;

  public getValue(): number;
  public getPrecision(): number;
  public getSeparators(): string[];

  /** Get value of currency */
  public val(): number;

  /**  Add a value */
  public add(value?: number): this;

  /** Subtract a value */
  public sub(value?: number): this;

  /** Multiply a value */
  public multiply(value?: number): this;

  /** Divide by a value */
  public divideBy(value?: number): this;

  /** Check if the value is integer */
  public isInteger(): boolean;

  /** Check if the value is decimal */
  public isDecimal(): boolean;

  /** Check if the value is integer */
  static isInteger(value: number): boolean;

  /** Check if the value is decimal */
  static isDecimal(value: number): boolean;
}

// ___ $ Exports ___
export default Currcash;

export declare class CurrcashError extends Error {
  public errorType: string

  constructor(message: string)
}

// ___ $ Modules: Operations ___

/** Add each value in the array */
export declare function add(values: number[]): number;

/** Subtract each value in the array */
export declare function sub(values: number[]): number;

/** Multiply each value in the array */
export declare function multiply(values: number[]): number;

/** Divide each value in the array */
export declare function divide(values: number[]): number;

// ___ $ Modules: boolean ___

/** Check if the value is integer */
export declare function isInteger(value: number): boolean;

/** Check if the value is decimal */
export declare function isDecimal(value: number): boolean;
