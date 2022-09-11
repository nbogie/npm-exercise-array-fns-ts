/**
 * A creator function.  Used to create something!
 *
 * @callback creatorCallback
 * @param index - a numeric index to help the callback return different things per call, deterministically
 * @return something, primitive or object, to be useful!
 */

/**
 * Create an array populated by the results of a given number of calls to a given creator function.
 *
 * @param numElems - number of elements to populate the array with.
 * @param creatorCallback - a function to call, to generate an element.
 * @returns new array of collected generated elements
 * @public
 */

function collect<T>(numElems: number, creatorCallback: (ix: number) => T): T[] {
  const results = [];
  for (let i = 0; i < numElems; i++) {
    const elem = creatorCallback(i);
    results.push(elem);
  }
  return results;
}

/**
 * An action callback function - used for its side-effects.
 *
 * @callback actionCallback
 * @param index - a numeric index to help the callback do different things per call, deterministically
 * @return Nothing - it will be ignored.
 */

/**
 * Repeatedly perform a given action, a given number of times, for its side effects.  The callback's return values will be ignored (and should always be undefined)
 *
 * @param numReps - number of repetitions
 * @param callbackFn - will be called numReps times, and each time passed an argument from 0 to numReps-1
 * @returns nothing.  The return values from the actionCallback are ignored.
 * @public
 */

function repeat(numReps: number, callbackFn: (ix: number) => void): void {
  for (let i = 0; i < numReps; i++) {
    callbackFn(i);
  }
}

/** Combine the elements of two given arrays into a single array of pairs.
 * If the input arrays are not the same length, excess elements will be ignored.
 * @param inputArr1 - first array
 * @param inputArr2 - second array
 * @returns array of tuples, each tuple containing an element of first and second array
 * @public
 *
 * @example
 * Here's a simple example:
 * ```
 * // evaluates to [[10, "a"], [20, "b"], [30, "c"]]:
 * zip([10, 20, 30], ["a", "b", "c"])
 * ```
 * @example
 * Here's an example where excess elements on one side are ignored:
 * ```
 * // evaluates to [[10, "a"], [20, "b"], [30, "c"]]:
 * zip([10, 20, 30, 40, 50], ["a", "b", "c"])
 * ```
 */
function zip<T, U>(inputArr1: T[], inputArr2: U[]): [T, U][] {
  const results = [];
  let ix = 0;
  while (ix < inputArr1.length && ix < inputArr2.length) {
    const a = inputArr1[ix];
    const b = inputArr2[ix];
    const pair: [T, U] = [a, b];
    results.push(pair);
    ix++;
  }
  return results;
}

export { collect, repeat, zip };
