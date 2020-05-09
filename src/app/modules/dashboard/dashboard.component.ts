import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  long: number;
  lat: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', long: 1.0079, lat: 41.3343453454 },
  { position: 2, name: 'Helium', long: 4.0026, lat:  49.3343453454 },
  { position: 3, name: 'Lithium', long: 6.941, lat:  41.3343453454 },
  { position: 4, name: 'Beryllium', long: 9.0122, lat:  41.3343453454 },
  { position: 5, name: 'Boron', long: 10.811, lat: 41.3343453454 },
  { position: 6, name: 'Carbon', long: 12.0107, lat:  46.3343453454 },
  { position: 7, name: 'Nitrogen', long: 14.0067, lat:  49.3343453454 },
  { position: 8, name: 'Hydrogen', long: 1.0079, lat: 41.3343453454 },
  { position: 9, name: 'Helium', long: 4.0026, lat:  49.3343453454 },
  { position: 10, name: 'Lithium', long: 6.941, lat:  41.3343453454 },
  { position: 11, name: 'Beryllium', long: 9.0122, lat:  41.3343453454 },
  { position: 12, name: 'Boron', long: 10.811, lat: 41.3343453454 },
  { position: 13, name: 'Carbon', long: 12.0107, lat:  46.3343453454 },
  { position: 14, name: 'Nitrogen', long: 14.0067, lat:  49.3343453454 },

];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];

  displayedColumns: string[] = ['position', 'name', 'long', 'lat'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }

}
