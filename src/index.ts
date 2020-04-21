import { SortDirection } from "./types";
import { MergeSort } from "./strategies/MergeSort";
import { QuickSort } from "./strategies/QuickSort";
import { BubbleSort } from "./strategies/BubbleSort";
import { InsertionSort } from "./strategies/InsertionSort";
import { SelectionSort } from "./strategies/SelectionSort";
import { HeapSort } from "./strategies/HeapSort";
import { Garage, ICar } from "./Garage";

const mergeSort = new HeapSort<ICar, number>(car => car.year, (year1, year2) => year1 - year2);
const quickSort = new QuickSort<ICar, number>(car => car.year, (year1, year2) => year1 - year2);
const heapSort = new HeapSort<ICar, number>(car => car.year, (year1, year2) => year1 - year2);

const garage = new Garage([
  { model: "BMW", year: 1997 },
  { model: "BMW", year: 2005 },
  { model: "Audi", year: 2003 },
  { model: "Opel", year: 2006 },
  { model: "Ford", year: 2010 },
  { model: "BMW", year: 2016 },
]);

console.log(garage.getCars());

console.log("Merge sort ASC: ");
console.log(mergeSort.sort(garage.getCars()));

console.log("Quick sort DESC: ");
console.log(quickSort.sort(garage.getCars(), SortDirection.Desc));

console.log("Heap sort ASC: ");
console.log(heapSort.sort(garage.getCars()));

const bubbleSort = new BubbleSort<number, number>(n => n, (a, b) => a - b);

console.log(bubbleSort.sort([8, 5, -5, 50, 41, 2, -1, 26]));
