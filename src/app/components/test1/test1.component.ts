import { Component } from '@angular/core';
import{TestService} from '../../service/test.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {
  title = "Title"
  items:string[]=[];
  constructor(private TestService:TestService){
    this.items = TestService.getItem();
  }
  
}
