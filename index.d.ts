/// <reference types='node'/>

import { Stream, Readable, Writable, Duplex } from 'stream';

// /**
//  * @see https://nodejs.org/dist/latest-v13.x/docs/api/assert.html#assert_assert_value_message
//  */
// export default function AssertEnhanced (value: any, message?: string | Error): void;

export class EnhancedAssertionError implements AssertionError {
  name: string;
  message: string;
  actual: any;
  expected: any;
  operator: string;
  generatedMessage: boolean;
  code: 'ERR_ASSERTION';

  constructor (options?: {
    message?: string,
    actual?: any,
    expected?: any,
    operator?: string,
    stackStartFn?: Function
  });
}

// -- Standard assertions --

export function bool (value: boolean, message?: string | Error): void;

export function number (value: number, message?: string | Error): void;

export function string (value: string, message?: string | Error): void;

export function symbol (value: Symbol, message?: string | Error): void;

export function object (value: object, message?: string | Error): void;

export function func (value: Function, message?: string | Error): void;

export function array (value: any[], message?: string | Error): void;

export function asyncFunc (value: Function, message?: string | Error): void;

export function promise (value: Promise<any>, message?: string | Error): void;

export function date (value: Date, message?: string | Error): void;

export function regexp (value: RegExp, message?: string | Error): void;

export function buffer (value: Buffer, message?: string | Error): void;

export function stream (value: Stream, message?: string | Error): void;

export function readable (value: Readable, message?: string | Error): void;

export function writable (value: Writable, message?: string | Error): void;

export function duplex (value: Duplex, message?: string | Error): void;

// -- Optional assertions --

export function optionalBool (value: boolean | null | undefined, message?: string | Error): void;

export function optionalNumber (value: number | null | undefined, message?: string | Error): void;

export function optionalString (value: string | null | undefined, message?: string | Error): void;

export function optionalSymbol (value: Symbol | null | undefined, message?: string | Error): void;

export function optionalObject (value: object | null | undefined, message?: string | Error): void;

export function optionalFunc (value: Function | null | undefined, message?: string | Error): void;

export function optionalArray (value: any[] | null | undefined, message?: string | Error): void;

export function optionalAsyncFunc (value: Function | null | undefined, message?: string | Error): void;

export function optionalPromise (value: Promise<any> | null | undefined, message?: string | Error): void;

export function optionalDate (value: Date | null | undefined, message?: string | Error): void;

export function optionalRegexp (value: RegExp | null | undefined, message?: string | Error): void;

export function optionalBuffer (value: Buffer | null | undefined, message?: string | Error): void;

export function optionalStream (value: Stream | null | undefined, message?: string | Error): void;

export function optionalReadable (value: Readable | null | undefined, message?: string | Error): void;

export function optionalWritable (value: Writable | null | undefined, message?: string | Error): void;

export function optionalDuplex (value: Duplex | null | undefined, message?: string | Error): void;

// -- ArrayOf assertions --

export function arrayOfBool (value: boolean[], message?: string | Error): void;

export function arrayOfNumber (value: number[], message?: string | Error): void;

export function arrayOfString (value: string[], message?: string | Error): void;

export function arrayOfSymbol (value: Symbol[], message?: string | Error): void;

export function arrayOfObject (value: object[], message?: string | Error): void;

export function arrayOfFunc (value: Function[], message?: string | Error): void;

export function arrayOfArray (value: any[][], message?: string | Error): void;

export function arrayOfAsyncFunc (value: Function[], message?: string | Error): void;

export function arrayOfPromise (value: Promise<any>[], message?: string | Error): void;

export function arrayOfDate (value: Date[], message?: string | Error): void;

export function arrayOfRegexp (value: RegExp[], message?: string | Error): void;

export function arrayOfBuffer (value: Buffer[], message?: string | Error): void;

export function arrayOfStream (value: Stream[], message?: string | Error): void;

export function arrayOfReadable (value: Readable[], message?: string | Error): void;

export function arrayOfWritable (value: Writable[], message?: string | Error): void;

export function arrayOfDuplex (value: Duplex[], message?: string | Error): void;

// -- Optional arrayOf assertions --

export function optionalArrayOfBool (value: boolean[] | null | undefined, message?: string | Error): void;

export function optionalArrayOfNumber (value: number[] | null | undefined, message?: string | Error): void;

export function optionalArrayOfString (value: string[] | null | undefined, message?: string | Error): void;

export function optionalArrayOfSymbol (value: Symbol[] | null | undefined, message?: string | Error): void;

export function optionalArrayOfObject (value: object[] | null | undefined, message?: string | Error): void;

export function optionalArrayOfFunc (value: Function[] | null | undefined, message?: string | Error): void;

export function optionalArrayOfArray (value: any[][] | null | undefined, message?: string | Error): void;

export function optionalArrayOfAsyncFunc (value: Function[] | null | undefined, message?: string | Error): void;

export function optionalArrayOfPromise (value: Promise<any>[] | null | undefined, message?: string | Error): void;

export function optionalArrayOfDate (value: Date[] | null | undefined, message?: string | Error): void;

export function optionalArrayOfRegexp (value: RegExp[] | null | undefined, message?: string | Error): void;

export function optionalArrayOfBuffer (value: Buffer[] | null | undefined, message?: string | Error): void;

export function optionalArrayOfStream (value: Stream[] | null | undefined, message?: string | Error): void;

export function optionalArrayOfReadable (value: Readable[] | null | undefined, message?: string | Error): void;

export function optionalArrayOfWritable (value: Writable[] | null | undefined, message?: string | Error): void;

export function optionalArrayOfDuplex (value: Duplex[] | null | undefined, message?: string | Error): void;

export interface EnhancedAssertionDefinition {
  check: Function;
  operator?: string;
  actual?: Function;
}

// -- Enhanced assertion registration method.

export function register (
  target: undefined | null | object | Function,
  definitions: { [key: string]: EnhancedAssertionDefinition },
  options?: {
    standard?: boolean,
    optional?: boolean,
    arrayOf?: boolean,
    optionalArrayOf?: boolean
  }
): any;

export function registerStandardAssertion (
  target: undefined | null | object | Function,
  name: string,
  definition: EnhancedAssertionDefinition
): any;

export function registerOptionalAssertion (
  target: undefined | null | object | Function,
  name: string,
  definition: EnhancedAssertionDefinition
): any;

export function registerArrayOfAssertion (
  target: undefined | null | object | Function,
  name: string,
  definition: EnhancedAssertionDefinition
): any;

export function registerOptionalArrayOfAssertion (
  target: undefined | null | object | Function,
  name: string,
  definition: EnhancedAssertionDefinition
): any;

// -- Enhanced assertion utils method.

export function getClassname (arg: any): string;

export function getTypeof (arg: any): string;

// -- Default Node.js assert module

/**
 * @see https://nodejs.org/dist/latest-v13.x/docs/api/assert.html#assert_new_assert_assertionerror_options
 */
export class AssertionError implements Error {
  name: string;
  message: string;
  actual: any;
  expected: any;
  operator: string;
  generatedMessage: boolean;
  code: 'ERR_ASSERTION';

  constructor (options?: {
    message?: string,
    actual?: any,
    expected?: any,
    operator?: string,
    stackStartFn?: Function
  });
}

export type AssertPredicate = RegExp | (new () => object) | ((thrown: any) => boolean) | object | Error;

/**
 * @see https://nodejs.org/dist/latest-v13.x/docs/api/assert.html#assert_assert_fail_message
 */
export function fail (message?: string | Error): never;

/**
 * @see https://nodejs.org/dist/latest-v13.x/docs/api/assert.html#assert_assert_fail_actual_expected_message_operator_stackstartfn
 * @deprecated since v10.0.0 - use fail([message]) or other assert functions instead.
 */
export function fail (actual: any, expected: any, message?: string | Error, operator?: string, stackStartFn?: Function): never;

/**
 * @see https://nodejs.org/dist/latest-v13.x/docs/api/assert.html#assert_assert_ok_value_message
 */
export function ok (value: any, message?: string | Error): void;

/**
 * @see https://nodejs.org/dist/latest-v13.x/docs/api/assert.html#assert_assert_equal_actual_expected_message
 */
export function equal (actual: any, expected: any, message?: string | Error): void;

/**
 * @see https://nodejs.org/dist/latest-v13.x/docs/api/assert.html#assert_assert_notequal_actual_expected_message
 */
export function notEqual (actual: any, expected: any, message?: string | Error): void;

/**
 * @see https://nodejs.org/dist/latest-v13.x/docs/api/assert.html#assert_assert_deepequal_actual_expected_message
 */
export function deepEqual (actual: any, expected: any, message?: string | Error): void;

/**
 * @see https://nodejs.org/dist/latest-v13.x/docs/api/assert.html#assert_assert_notdeepequal_actual_expected_message
 */
export function notDeepEqual (actual: any, expected: any, message?: string | Error): void;

/**
 * @see https://nodejs.org/dist/latest-v13.x/docs/api/assert.html#assert_assert_strictequal_actual_expected_message
 */
export function strictEqual (actual: any, expected: any, message?: string | Error): void;

/**
 * @see https://nodejs.org/dist/latest-v13.x/docs/api/assert.html#assert_assert_notstrictequal_actual_expected_message
 */
export function notStrictEqual (actual: any, expected: any, message?: string | Error): void;

/**
 * @see https://nodejs.org/dist/latest-v13.x/docs/api/assert.html#assert_assert_deepstrictequal_actual_expected_message
 */
export function deepStrictEqual (actual: any, expected: any, message?: string | Error): void;

/**
 * @see https://nodejs.org/dist/latest-v13.x/docs/api/assert.html#assert_assert_notdeepstrictequal_actual_expected_message
 */
export function notDeepStrictEqual (actual: any, expected: any, message?: string | Error): void;

// ----------

/**
 * @see https://nodejs.org/dist/latest-v13.x/docs/api/assert.html#assert_assert_throws_fn_error_message
 */
export function throws (block: () => any, message?: string | Error): void;

/**
 * @see https://nodejs.org/dist/latest-v13.x/docs/api/assert.html#assert_assert_throws_fn_error_message
 */
export function throws (block: () => any, error: AssertPredicate, message?: string | Error): void;

/**
 * @see https://nodejs.org/dist/latest-v13.x/docs/api/assert.html#assert_assert_doesnotthrow_fn_error_message
 */
export function doesNotThrow (block: () => any, message?: string | Error): void;

/**
 * @see https://nodejs.org/dist/latest-v13.x/docs/api/assert.html#assert_assert_doesnotthrow_fn_error_message
 */
export function doesNotThrow (block: () => any, error: RegExp | Function, message?: string | Error): void;

// ----------

/**
 * @see https://nodejs.org/dist/latest-v13.x/docs/api/assert.html#assert_assert_iferror_value
 */
export function ifError (value: any): void;

// ----------

/**
 * @see https://nodejs.org/dist/latest-v13.x/docs/api/assert.html#assert_assert_rejects_asyncfn_error_message
 */
export function rejects (block: (() => Promise<any>) | Promise<any>, message?: string | Error): Promise<void>;

/**
 * @see https://nodejs.org/dist/latest-v13.x/docs/api/assert.html#assert_assert_rejects_asyncfn_error_message
 */
export function rejects (block: (() => Promise<any>) | Promise<any>, error: AssertPredicate, message?: string | Error): Promise<void>;

/**
 * @see https://nodejs.org/dist/latest-v13.x/docs/api/assert.html#assert_assert_doesnotreject_asyncfn_error_message
 */
export function doesNotReject (block: (() => Promise<any>) | Promise<any>, message?: string | Error): Promise<void>;

/**
 * @see https://nodejs.org/dist/latest-v13.x/docs/api/assert.html#assert_assert_doesnotreject_asyncfn_error_message
 */
export function doesNotReject (block: (() => Promise<any>) | Promise<any>, error: RegExp | Function, message?: string | Error): Promise<void>;

// ----------

/**
 * @see https://nodejs.org/dist/latest-v13.x/docs/api/assert.html#assert_assert_match_string_regexp_message
 */
export function match (value: string, regExp: RegExp, message?: string | Error): void;

/**
 * @see https://nodejs.org/dist/latest-v13.x/docs/api/assert.html#assert_assert_doesnotmatch_string_regexp_message
 */
export function doesNotMatch (value: string, regExp: RegExp, message?: string | Error): void;

export as namespace AssertEnhanced;
