
export function swap(arr: unknown[], a: number, b: number) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
