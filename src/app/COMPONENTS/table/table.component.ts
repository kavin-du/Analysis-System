import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  position: number;
  date: string;
  total: string;
  average: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, date: '2022-01-12', total: '$450.15', average: '$89.23'},
  {position: 2, date: '2022-02-09', total: '$74.15', average: '$74.44'},
  {position: 3, date: '2022-03-14', total: '$450.15', average: '$89.22'},
  {position: 4, date: '2022-04-12', total: '$141.56', average: '$55.34'},
  {position: 5, date: '2022-05-25', total: '$845.15', average: '$14.77'},
  {position: 6, date: '2022-06-12', total: '$252.34', average: '$10.44'},
  {position: 7, date: '2022-07-31', total: '$741.23', average: '$55.23'},
  {position: 8, date: '2022-08-10', total: '$450.23', average: '$87.44'},
  {position: 9, date: '2022-09-08', total: '$456.66', average: '$88.44'},
  {position: 10, date: '2022-10-06', total: '$744.44', average: '$252.66'},
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'date', 'total', 'average'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
