declare module "array-from-async" {
  /**
   * Creates an array from an asynchronous iterable object.
  */
  export default function fromAsync<T>(iterable: AsyncIterable<T> | ArrayLike<Promise<T>>): Promise<T[]>;
  export default function fromAsync<T, U>(iterable: AsyncIterable<T> | ArrayLike<Promise<T>>, mapfn: (v: T, k: number) => U, thisArg?: any): Promise<T[]>;
}