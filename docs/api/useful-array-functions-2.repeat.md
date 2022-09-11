<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@nbogie/useful-array-functions-2](./useful-array-functions-2.md) &gt; [repeat](./useful-array-functions-2.repeat.md)

## repeat() function

Repeatedly perform a given action, a given number of times, for its side effects. The callback's return values will be ignored (and should always be undefined)

<b>Signature:</b>

```typescript
declare function repeat(numReps: number, callbackFn: (ix: number) => void): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  numReps | number | number of repetitions |
|  callbackFn | (ix: number) =&gt; void | will be called numReps times, and each time passed an argument from 0 to numReps-1 |

<b>Returns:</b>

void

nothing. The return values from the actionCallback are ignored.
