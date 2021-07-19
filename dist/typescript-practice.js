"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(function () {
    class Vehicle {
        constructor(year) {
            this.year = year;
        }
        printYear() {
            console.log('This vehicle has a year of', this.year);
        }
        static printSomething() {
            console.log('Something');
        }
    }
    const fordFocus = new Vehicle(2006);
    const toyotaYaris = new Vehicle(2011);
    fordFocus.printYear();
    toyotaYaris.printYear();
    Vehicle.printSomething();
})();
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const printVehicleYear = (vehicle) => {
            return vehicle.year;
        };
        const printVehicles = (vehicles) => {
            console.log(vehicles);
        };
        const vehicles = [];
        const vehicle1 = {
            year: 2006,
            make: 'Buick',
            model: 'Regal',
            class: 'suv'
        };
        const vehicle2 = {
            year: 1984,
            make: 'Ford',
            model: 'F250',
            class: 'truck'
        };
        vehicles.push(vehicle1);
        vehicles.push(vehicle2);
        printVehicles(vehicles);
        const numbers = [1, 2, 3];
    });
})();
