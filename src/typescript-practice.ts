// TypeScript is an open-source object-oriented language developed and maintained by Microsoft, 
// licensed under Apache 2 license. It is a typed superset of Javascript that compiles to plain JavaScript. 
// TypeScript was developed under Anders Hejlsberg, who also led the creation of the C# language. 
// TypeScript was first released in October 2012.
 
 
//https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
 
// Object Oriented Programing with TypeScript Example
 
(function() {
    class Vehicle {
      year: number;
  
      constructor(year: number) {
        this.year = year;
      }
  
      printYear(): void {
        console.log('This vehicle has a year of', this.year);
      }
  
      static printSomething(): void {
        console.log('Something');
      }
    }
  
    const fordFocus = new Vehicle(2006);
    const toyotaYaris = new Vehicle(2011);
  
    fordFocus.printYear();
    toyotaYaris.printYear();
  
    Vehicle.printSomething();
  })();
 
 
  //Interfaces and Types
  type VehicleClass = 'suv' | 'sedan' | 'coupe' | 'truck';
 
interface Vehicle {
  year: number;
  make: string;
  model: string;
  horsepower?: number;
  class: VehicleClass;
}
 
(async function() {
  // function printVehicleYear(vehicle: Vehicle): void { }
  const printVehicleYear = (vehicle: Vehicle): number => {
    return vehicle.year;
  }
 
  const printVehicles = (vehicles: Vehicle[]): void =>{
    console.log(vehicles);
  }
 
  const vehicles: Vehicle[] = [];
 
  const vehicle1: Vehicle = {
    year: 2006,
    make: 'Buick',
    model: 'Regal',
    class: 'suv'
  };
 
  const vehicle2: Vehicle = {
    year: 1984,
    make: 'Ford',
    model: 'F250',
    class: 'truck'
  }
 
  vehicles.push(vehicle1);
  vehicles.push(vehicle2);
 
  printVehicles(vehicles);
 
  const numbers: number[] = [1, 2, 3];
})();
