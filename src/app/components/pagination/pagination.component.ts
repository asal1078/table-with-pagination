import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api.service';
import { LIST } from 'src/app/models/listModel'
import { PaginationNumersModel } from 'src/app/models/pagination-numbers';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  
  allDatasArray : Array<LIST> = [];
  allPaginationNumbersArray : Array<PaginationNumersModel> = [];
  visiblePaginationNumbersArray : Array<PaginationNumersModel> = [];

  tableDefaulValue: Array<LIST> = [];
  
  constructor(private service: ApiService) {}

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
        this.getPageNumbersVisible(0,6);
      }
    )
  }

  public getPaginationNumbers(len : number){
    for(let i=0; i<len; i++){
      this.allPaginationNumbersArray.push(
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
    this.allPaginationNumbersArray.forEach(item=> item.isSelected = false);
    this.allPaginationNumbersArray.find(item=> item.title == pageNumber)!.isSelected = true;
  }

  public getPageNumbersVisible(start: number , end: number){
    for(let i=start ; i < end ; i++){
      this.visiblePaginationNumbersArray.push(this.allPaginationNumbersArray[i])!;
    }
  }

  public addPaginationNumber(){
    var min : number = this.visiblePaginationNumbersArray[0]!.title;
    var max : number = this.allDatasArray.length/10;
    if(min + 6 != max){
      this.visiblePaginationNumbersArray = [];
      for(let i=min ; i<=min+6 ; i++){
        this.visiblePaginationNumbersArray.push(this.allPaginationNumbersArray[i]);
      }
      min = this.visiblePaginationNumbersArray[0]!.title;
      this.getTenData(min);
    }
    
  }

  public reducePaginationNumber(){
    var max : number = this.visiblePaginationNumbersArray[6]!.title;
    var min : number = this.visiblePaginationNumbersArray[0]!.title;
    if(min != 1){
      this.visiblePaginationNumbersArray = [];
      for(let i=min-1 ; i<=max-1 ; i++){
        this.visiblePaginationNumbersArray.push(this.allPaginationNumbersArray[i-1]);
      }
      min = this.visiblePaginationNumbersArray[0]!.title;
      this.getTenData(min);
    }
  }



}
