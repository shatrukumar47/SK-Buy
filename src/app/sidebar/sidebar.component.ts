import { Component, Input , OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
 @Input() handleFilterCategory: Function = (): void =>{

 }

 @Input() categoryValue:string = '';

 @Input() handleRatingCateogry: Function = (): void =>{
  
 }

 ngOnInit(): void {
  //  console.log(this.categoryValue)
 }

}
