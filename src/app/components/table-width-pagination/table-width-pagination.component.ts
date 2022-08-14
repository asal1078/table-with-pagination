import { Component, OnInit } from '@angular/core';
import { LIST } from 'src/app/models/listModel';
import { ApiService } from 'src/app/services/api-service/api.service';

@Component({
  selector: 'app-table-width-pagination',
  templateUrl: './table-width-pagination.component.html',
  styleUrls: ['./table-width-pagination.component.css']
})
export class TableWidthPaginationComponent implements OnInit {

  constructor(private service: ApiService) { 
    
  }
   tableDatas : Array<LIST> = [];

  ngOnInit(): void {
  }

  getTableData(emitedTableDatas: Array<LIST>){
    this.tableDatas = emitedTableDatas;
  }
  

}
