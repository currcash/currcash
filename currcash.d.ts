// ___ $ Types ___
export type Currency = {
  value?: number;
  precision?: number;
  separators?: string[];
};

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

  public val(): number;
  public add(value?: number): this;
  public sub(value?: number): this;
  public multiply(value?: number): this;
  public divideBy(value?: number): this;
  public isInteger(): boolean;
  public isDecimal(): boolean;
  static isInteger(value: number): boolean;
  static isDecimal(value: number): boolean;
}

// ___ $ Exports ___
export declare class CurrcashError extends Error {
  public errorType: string;

  constructor(message: string);
}

// ___ $ Modules: Operations ___
export declare function add(values: number[]): number;
export declare function sub(values: number[]): number;
export declare function multiply(values: number[]): number;
export declare function divide(values: number[]): number;

// ___ $ Modules: boolean ___
export declare function isInteger(value: number): boolean;
export declare function isDecimal(value: number): boolean;
