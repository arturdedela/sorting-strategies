export enum SortDirection {
  Asc = 1,
  Desc = -1,
}

export interface ISortingStrategy<T> {
  sort(array: T[], direction: SortDirection): T[]
}

export type FieldSelector<T, Key> = (obj: T) => Key;
export type Comparer<T> = (a: T, b: T) => number;

export interface IPrototype<T> {
  clone(): T;
}
