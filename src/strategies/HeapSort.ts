import { SortStrategyBase } from "./SortStrategyBase";
import { SortDirection } from "../types";
import { swap } from "../utils/swap";

export class HeapSort<T, Key> extends SortStrategyBase<T, Key> {
  sort(array: T[], direction: SortDirection = SortDirection.Asc): T[] {
    this.sortDirection = direction;

    for (let i = Math.ceil(array.length / 2) - 1; i >= 0; i--) {
      const prev_i = i;

      i = this.AddToPyramid(array, i, array.length);

      if (prev_i != i) {
        ++i;
      }
    }

    for (let k = array.length - 1; k > 0; k--) {
      swap(array, 0, k);

      let i: number = 0;
      let prev_i = -1;

      while (i != prev_i)
      {
        prev_i = i;
        i = this.AddToPyramid(array, i, k);
      }
    }

    return array;
  }

  private AddToPyramid(array: T[], i: number, N: number): number {
    let imax: number;

    if ((2 * i + 2) < N) {
      // if (array[2 * i + 1] < array[2 * i + 2]) { // original
      if (this.compare(array[2 * i + 1], array[2 * i + 2]) < 0) {
        imax = 2 * i + 2;
      } else {
        imax = 2 * i + 1;
      }
    } else {
      imax = 2 * i + 1;
    }

    if (imax >= N) {
      return i;
    }

    if (this.compare(array[i], array[imax]) < 0) {
      swap(array, i, imax);

      if (imax < Math.ceil(N / 2)) {
        i = imax;
      }
    }

    return i;
  }
}
