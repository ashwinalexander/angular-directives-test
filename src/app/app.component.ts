import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

show: boolean = false;
count: number = 0;
lis = [];

onToggle(){
  this.show = !this.show;
this.count += 1; 
  this.lis.push(this.count);

  console.log(this.lis);
  return this.show;
  
}

}
