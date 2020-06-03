import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [{
      name: "Device 1",
      data: [
          [Date.UTC(2020, 10, 25), 0],
          [Date.UTC(2020, 11,  6), 0.25],
          [Date.UTC(2020, 11, 20), 1.41],
          [Date.UTC(2020, 11, 25), 1.64],
          [Date.UTC(2020, 0,  4), 1.6],
          [Date.UTC(2020, 0, 17), 2.55],
          [Date.UTC(2020, 0, 24), 2.62],
          [Date.UTC(2020, 1,  4), 2.5],
          [Date.UTC(2020, 1, 14), 2.42],
          [Date.UTC(2020, 2,  6), 2.74],
          [Date.UTC(2020, 2, 14), 2.62],
          [Date.UTC(2020, 2, 24), 2.6],
          [Date.UTC(2020, 3,  1), 2.81],
          [Date.UTC(2020, 3, 11), 2.63],
          [Date.UTC(2020, 3, 27), 2.77],
          [Date.UTC(2020, 4,  4), 2.68],
          [Date.UTC(2020, 4,  9), 2.56],
          [Date.UTC(2020, 4, 14), 2.39],
          [Date.UTC(2020, 4, 19), 2.3],
          [Date.UTC(2020, 5,  4), 2],
          [Date.UTC(2020, 5,  9), 1.85],
          [Date.UTC(2020, 5, 14), 1.49],
          [Date.UTC(2020, 5, 19), 1.27],
          [Date.UTC(2020, 5, 24), 0.99],
          [Date.UTC(2020, 5, 29), 0.67],
          [Date.UTC(2020, 6,  3), 0.18],
          [Date.UTC(2020, 6,  4), 0]
      ]
  }, {
      name: "Device 2",
      data: [
          [Date.UTC(2020, 10,  9), 0],
          [Date.UTC(2020, 10, 15), 0.23],
          [Date.UTC(2020, 10, 20), 0.25],
          [Date.UTC(2020, 10, 25), 0.23],
          [Date.UTC(2020, 10, 30), 0.39],
          [Date.UTC(2020, 11,  5), 0.41],
          [Date.UTC(2020, 11, 10), 0.59],
          [Date.UTC(2020, 11, 15), 0.73],
          [Date.UTC(2020, 11, 20), 0.41],
          [Date.UTC(2020, 11, 25), 1.07],
          [Date.UTC(2020, 11, 30), 0.88],
          [Date.UTC(2020, 0,  5), 0.85],
          [Date.UTC(2020, 0, 11), 0.89],
          [Date.UTC(2020, 0, 17), 1.04],
          [Date.UTC(2020, 0, 20), 1.02],
          [Date.UTC(2020, 0, 25), 1.03],
          [Date.UTC(2020, 0, 30), 1.39],
          [Date.UTC(2020, 1,  5), 1.77],
          [Date.UTC(2020, 1, 26), 2.12],
          [Date.UTC(2020, 3, 19), 2.1],
          [Date.UTC(2020, 4,  9), 1.7],
          [Date.UTC(2020, 4, 29), 0.85],
          [Date.UTC(2020, 5,  7), 0]
      ]
  }, {
      name: "Device 3",
      data: [
          [Date.UTC(2020, 9, 15), 0],
          [Date.UTC(2020, 9, 31), 0.09],
          [Date.UTC(2020, 10,  7), 0.17],
          [Date.UTC(2020, 10, 10), 0.1],
          [Date.UTC(2020, 11, 10), 0.1],
          [Date.UTC(2020, 11, 13), 0.1],
          [Date.UTC(2020, 11, 16), 0.11],
          [Date.UTC(2020, 11, 19), 0.11],
          [Date.UTC(2020, 11, 22), 0.08],
          [Date.UTC(2020, 11, 25), 0.23],
          [Date.UTC(2020, 11, 28), 0.37],
          [Date.UTC(2020, 0, 16), 0.68],
          [Date.UTC(2020, 0, 19), 0.55],
          [Date.UTC(2020, 0, 22), 0.4],
          [Date.UTC(2020, 0, 25), 0.4],
          [Date.UTC(2020, 0, 28), 0.37],
          [Date.UTC(2020, 0, 31), 0.43],
          [Date.UTC(2020, 1,  4), 0.42],
          [Date.UTC(2020, 1,  7), 0.39],
          [Date.UTC(2020, 1, 10), 0.39],
          [Date.UTC(2020, 1, 13), 0.39],
          [Date.UTC(2020, 1, 16), 0.39],
          [Date.UTC(2020, 1, 19), 0.35],
          [Date.UTC(2020, 1, 22), 0.45],
          [Date.UTC(2020, 1, 25), 0.62],
          [Date.UTC(2020, 1, 28), 0.68],
          [Date.UTC(2020, 2,  4), 0.68],
          [Date.UTC(2020, 2,  7), 0.65],
          [Date.UTC(2020, 2, 10), 0.65],
          [Date.UTC(2020, 2, 13), 0.75],
          [Date.UTC(2020, 2, 16), 0.86],
          [Date.UTC(2020, 2, 19), 1.14],
          [Date.UTC(2020, 2, 22), 1.2],
          [Date.UTC(2020, 2, 25), 1.27],
          [Date.UTC(2020, 2, 27), 1.12],
          [Date.UTC(2020, 2, 30), 0.98],
          [Date.UTC(2020, 3,  3), 0.85],
          [Date.UTC(2020, 3,  6), 1.04],
          [Date.UTC(2020, 3,  9), 0.92],
          [Date.UTC(2020, 3, 12), 0.96],
          [Date.UTC(2020, 3, 15), 0.94],
          [Date.UTC(2020, 3, 18), 0.99],
          [Date.UTC(2020, 3, 21), 0.96],
          [Date.UTC(2020, 3, 24), 1.15],
          [Date.UTC(2020, 3, 27), 1.18],
          [Date.UTC(2020, 3, 30), 1.12],
          [Date.UTC(2020, 4,  3), 1.06],
          [Date.UTC(2020, 4,  6), 0.96],
          [Date.UTC(2020, 4,  9), 0.87],
          [Date.UTC(2020, 4, 12), 0.88],
          [Date.UTC(2020, 4, 15), 0.79],
          [Date.UTC(2020, 4, 18), 0.54],
          [Date.UTC(2020, 4, 21), 0.34],
          [Date.UTC(2020, 4, 25), 0]
      ]
  }];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'DEVICE-1',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'DEVICE-2',
      y: 11.84
    }, {
      name: 'DEVICE-3',
      y: 10.85
    }, {
      name: 'DEVICE-4',
      y: 4.67
    }, {
      name: 'DEVICE-5',
      y: 4.18
    }];
  }
  otherChart(){
    return [{
      data: [-20],
      yAxis: 0
  }];
  }
}
