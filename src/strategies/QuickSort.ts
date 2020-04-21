import { SortStrategyBase } from "./SortStrategyBase";
import { SortDirection } from "../types";
import { swap } from "../utils/swap";

export class QuickSort<T, Key> extends SortStrategyBase<T, Key> {
  sort(array: T[], direction: SortDirection = SortDirection.Asc): T[] {
    this.sortDirection = direction;
    return this.quicksort(array, 0, array.length - 1);
  }

  private partition(arr: T[], left: number, right: number) {
    const midIndex = Math.floor((left + right) / 2);
    const pivot = arr[midIndex];

    while (left <= right) {
      while (this.compare(arr[left], pivot) < 0) left++;
      while (this.compare(arr[right], pivot) > 0) right--;

      if (left <= right) {
        swap(arr, left, right);
        left++;
        right--;
      }
    }

    return left;
  }

  private quicksort(arr: T[], left: number, right: number): T[] {
    if (left >= right) {
      return arr;
    }

    let index = this.partition(arr, left, right);
    this.quicksort(arr, left, index - 1);
    this.quicksort(arr, index, right);

    return arr;
  }
}
