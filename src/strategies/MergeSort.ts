import { SortDirection } from "../types";
import { SortStrategyBase } from "./SortStrategyBase";


export class MergeSort<T, Key> extends SortStrategyBase<T, Key> {
  sort(array: T[], direction: SortDirection = SortDirection.Asc): T[] {
    this.sortDirection = direction;
    return this.mergeSort(array);
  }

  private merge(left: T[], right: T[]): T[] {
    let merged = [];
    let iLeft = 0;
    let iRight = 0;

    while (iLeft < left.length && iRight < right.length) {
      if (this.compare(left[iLeft], right[iRight]) < 0) {
        merged.push(left[iLeft++]);
      } else {
        merged.push(right[iRight++]);
      }
    }
    const leftRemaining = left.slice(iLeft);
    const rightRemaining = right.slice(iRight);

    return merged.concat(leftRemaining).concat(rightRemaining);
  }

  private mergeSort(arr: T[]): T[] {
    if (arr.length < 2) {
      return arr;
    }

    const middle = Math.floor(arr.length / 2);

    const half1 = arr.slice(0, middle);
    const half2 = arr.slice(middle);

    return this.merge(this.mergeSort(half1), this.mergeSort(half2));
  }
}

