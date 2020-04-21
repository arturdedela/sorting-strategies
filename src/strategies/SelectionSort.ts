import { SortStrategyBase } from "./SortStrategyBase";
import { SortDirection } from "../types";
import { swap } from "../utils/swap";

export class SelectionSort<T, Key> extends SortStrategyBase<T, Key> {
  sort(array: T[], direction: SortDirection = SortDirection.Asc): T[] {
    this.sortDirection = direction;

    for (let i = 0; i < array.length - 1; i++) {
      let min = i;

      for (let j = i + 1; j < array.length; j++) {
        if (this.compare(array[j], array[min]) < 0) {
          min = j;
        }
      }

      if (min != i) {
        swap(array, i, min);
      }
    }

    return array;
  }
}
