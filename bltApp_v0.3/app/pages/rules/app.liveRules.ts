import{Component,OnInit,OnDestroy} from '@angular/core';
import {NavParams} from 'ionic-angular';

//import {Data} from './data';
//import{DataService} from './app.dataGet';

@Component({
    selector:'live-rules',
    templateUrl:'build/pages/rules/liveRules.html',
})
export class Rules implements OnInit,OnDestroy{

   //info: Data[];
   timeStun=2;    //seconds
   distSafe=15;   //feet
   
   constructor(private navParams: NavParams /*private dataService: DataService*/) {
   }

   ngOnInit(){
      this.getData();

   }
   ngOnDestroy(){

   }
   getData() {
/*
      this.dataService.getData(1,"id").then(egg => this.dynamicRules = egg);
      this.dataService.getData(2,"name").then(egg => this.staticRules = egg);
*/ }
}
