import { IPrototype } from "./types";

export interface ICar {
  model: string;
  year: number;
}

export class Garage implements IPrototype<Garage> {
  constructor(private cars: ICar[]) {}

  clone(): Garage {
    return new Garage([...this.cars]);
  }

  getCars() {
    return this.cars;
  }
}
