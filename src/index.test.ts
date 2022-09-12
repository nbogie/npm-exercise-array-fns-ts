import { collect, repeat, zip } from "./index";

test("collect works with a function that uses the arg", () => {
  expect(collect(3, (ix: number) => ix * 10)).toStrictEqual([0, 10, 20]);
});
test("collect works with 0 elems", () => {
  expect(collect(0, (ix: number) => ix * 10)).toStrictEqual([]);
});

test("repeat works with 0 reps", () => {
  const arr: any[] = [];
  const res = repeat(0, (ix: number) => arr.push(ix * 10));
  expect(res).toBe(undefined);
  expect(arr).toStrictEqual([]);
});

test("repeat works with 3 mutation reps", () => {
  const arr: number[] = [];
  repeat(3, (ix: number) => arr.push(ix * 10));
  expect(arr).toStrictEqual([0, 10, 20]);
});

test("zip works", () => {
  expect(zip([10, 20, 30], ["a", "b", "c"])).toStrictEqual([
    [10, "a"],
    [20, "b"],
    [30, "c"],
  ]);
});
test("zip ignores excess elements", () => {
  expect(zip([10, 20, 30], ["a", "b", "c", "d", "e"])).toStrictEqual([
    [10, "a"],
    [20, "b"],
    [30, "c"],
  ]);
  expect(zip([10, 20, 30, 40, 50], ["a", "b"])).toStrictEqual([
    [10, "a"],
    [20, "b"],
  ]);
});
