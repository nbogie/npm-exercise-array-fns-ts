A set of array utility functions. Only published as an exercise in npm package creation and maintenance.

## Functions

<dl>
<dt><a href="#collect">collect(numElems, creatorCallback)</a></dt>
<dd><p>Create an array populated by the results of a given number of calls to a given creator function.</p>
</dd>
<dt><a href="#repeat">repeat(numReps, callbackFn)</a> ⇒ <code>void</code></dt>
<dd><p>Repeatedly perform a given action, a given number of times, for its side effects.  The callback&#39;s return values will be ignored (and should always be undefined)</p>
</dd>
<dt><a href="#zip">zip(inputArr1, inputArr2)</a> ⇒ <code><a href="#Pair">Array.&lt;Pair&gt;</a></code></dt>
<dd><p>Combine the elements of two given arrays into a single array of pairs.
If the input arrays are not the same length, excess elements will be ignored.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#creatorCallback">creatorCallback</a> ⇒ <code>*</code></dt>
<dd><p>A creator function.  Used to create something!</p>
</dd>
<dt><a href="#actionCallback">actionCallback</a> ⇒ <code>void</code></dt>
<dd><p>An action callback function - used for its side-effects.</p>
</dd>
<dt><a href="#Pair">Pair</a> : <code>Array.&lt;string&gt;</code></dt>
<dd></dd>
</dl>

<a name="collect"></a>

## collect(numElems, creatorCallback)

Create an array populated by the results of a given number of calls to a given creator function.

**Kind**: global function

| Param           | Type                                             | Description                                    |
| --------------- | ------------------------------------------------ | ---------------------------------------------- |
| numElems        | <code>number</code>                              | number of elements to populate the array with. |
| creatorCallback | [<code>creatorCallback</code>](#creatorCallback) | a function to call                             |

<a name="repeat"></a>

## repeat(numReps, callbackFn) ⇒ <code>void</code>

Repeatedly perform a given action, a given number of times, for its side effects. The callback's return values will be ignored (and should always be undefined)

**Kind**: global function  
**Returns**: <code>void</code> - returns nothing. The return values from the actionCallback are ignored.

| Param      | Type                                           | Description                                                                        |
| ---------- | ---------------------------------------------- | ---------------------------------------------------------------------------------- |
| numReps    | <code>number</code>                            | number of repetitions                                                              |
| callbackFn | [<code>actionCallback</code>](#actionCallback) | will be called numReps times, and each time passed an argument from 0 to numReps-1 |

<a name="zip"></a>

## zip(inputArr1, inputArr2) ⇒ [<code>Array.&lt;Pair&gt;</code>](#Pair)

Combine the elements of two given arrays into a single array of pairs.
If the input arrays are not the same length, excess elements will be ignored.

**Kind**: global function  
**Returns**: [<code>Array.&lt;Pair&gt;</code>](#Pair) - array of tuples (2-element array)

| Param     | Type                           |
| --------- | ------------------------------ |
| inputArr1 | <code>Array.&lt;any&gt;</code> |
| inputArr2 | <code>Array.&lt;any&gt;</code> |

<a name="zip..pair"></a>

### zip~pair : [<code>Pair</code>](#Pair)

**Kind**: inner constant of [<code>zip</code>](#zip)  
<a name="creatorCallback"></a>

## creatorCallback ⇒ <code>\*</code>

A creator function. Used to create something!

**Kind**: global typedef  
**Returns**: <code>\*</code> - - should return something, to be useful!

| Param | Type                | Description                                                                              |
| ----- | ------------------- | ---------------------------------------------------------------------------------------- |
| index | <code>number</code> | a numeric index to help the callback return different things per call, deterministically |

<a name="actionCallback"></a>

## actionCallback ⇒ <code>void</code>

An action callback function - used for its side-effects.

**Kind**: global typedef  
**Returns**: <code>void</code> - - should not return anything - will be ignored.

| Param | Type                | Description                                                                          |
| ----- | ------------------- | ------------------------------------------------------------------------------------ |
| index | <code>number</code> | a numeric index to help the callback do different things per call, deterministically |

<a name="Pair"></a>

## Pair : <code>Array.&lt;string&gt;</code>

**Kind**: global typedef  
Done in 0.26s.
