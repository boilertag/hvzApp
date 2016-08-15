import{Component} from '@angular/core';
import {NavParams} from 'ionic-angular';

//import {Data} from './data';
//import{DataService} from './app.dataGet';

@Component({
   selector:'login',
   templateUrl:'build/pages/login/login.html',
})
export class Login {
   //userName="";
   //passWord="";
   //userPass: Data;
   constructor(private navParams: NavParams/*,
   private dataService: DataService*/){
      
   }

   loginPress(){
      //this.userPass={id: this.userName, name: this.passWord};
      //this.dataService.returnData(this.userPass);

   }


}
