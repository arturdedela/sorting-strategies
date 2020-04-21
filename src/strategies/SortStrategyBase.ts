import { Comparer, FieldSelector, ISortingStrategy, SortDirection } from "../types";

export abstract class SortStrategyBase<T, Key> implements ISortingStrategy<T> {
  private readonly selector: FieldSelector<T, Key>;
  private readonly comparer: Comparer<Key>;
  protected sortDirection: SortDirection = SortDirection.Asc;

  protected compare(a: T, b: T): number {
    return this.comparer(this.selector(a), this.selector(b)) * this.sortDirection;
  }

  constructor(selector: FieldSelector<T, Key>, comparer: Comparer<Key>) {
    this.selector = selector;
    this.comparer = comparer;
  }

  abstract sort(array: T[], direction: SortDirection): T[];
}
