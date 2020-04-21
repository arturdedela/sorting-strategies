import { SortStrategyBase } from "./SortStrategyBase";
import { SortDirection } from "../types";
import { swap } from "../utils/swap";

export class BubbleSort<T, Key> extends SortStrategyBase<T, Key> {
  sort(array: T[], direction: SortDirection = SortDirection.Asc): T[] {
    this.sortDirection = direction;

    for (let i = array.length - 1; i > 0; i--) {
      for (let k = 0; k < i; k++) {
        if (this.compare(array[k], array[k + 1]) > 0) {
          swap(array, k, k + 1);
        }
      }
    }

    return array;
  }
}
