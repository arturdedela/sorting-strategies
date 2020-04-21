import { SortStrategyBase } from "./SortStrategyBase";
import { SortDirection } from "../types";

export class InsertionSort<T, Key> extends SortStrategyBase<T, Key> {
  sort(array: T[], direction: SortDirection = SortDirection.Asc): T[] {
    this.sortDirection = direction;

    for (let i = 1; i < array.length; i++) {
      let k: number;
      const tmp = array[i];

      for (k = i - 1; k >= 0; k--) {
        if (this.compare(array[k], tmp) < 0) {
          break;
        }

        array[k + 1] = array[k];
      }

      array[k + 1] = tmp;
    }

    return array;
  }
}
