import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api.service';
import { LIST } from 'src/app/models/listModel'
import { map } from 'rxjs';
import { PaginationNumersModel } from 'src/app/models/pagination-numbers';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  
  allDatasArray : Array<LIST> = [];
  paginationNumbersArray : Array<PaginationNumersModel> = [];
  tableDefaulValue: Array<LIST> = [];
  
  constructor(private service: ApiService) { 
    
  }

  @Output() dataArrayEmit = new EventEmitter();

  ngOnInit(): void {
    this.getList();
  }

  public getList(){
    this.service.getList().subscribe(
      (data:any)=>{
        this.allDatasArray = data;
        this.getPaginationNumbers(this.allDatasArray.length/10);
        this.getTenData(1);
      }
    )
  }

  public getPaginationNumbers(len : number){
    for(let i=0; i<len; i++){
      this.paginationNumbersArray.push(
        {
          title: i+1,
          isSelected: false
        }
      );
    }
  }

  public getTenData(number : number){
    this.selectingPageNumber(number);
    this.dataArrayEmit.emit(this.allDatasArray.filter(item=> item.id>=(number-1)*10 && item.id<((number-1)*10)+10));
  }

  public selectingPageNumber(pageNumber: number){
    this.paginationNumbersArray.forEach(item=> item.isSelected = false);
    this.paginationNumbersArray.find(item=> item.title == pageNumber)!.isSelected = true;
  }



}
