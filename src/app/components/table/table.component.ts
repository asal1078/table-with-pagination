import { Component, Input, OnInit } from '@angular/core';
import { LIST } from 'src/app/models/listModel';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() tableData : Array<LIST> = [];
  
  constructor() { 

  }


  ngOnInit(): void {
  }


}
