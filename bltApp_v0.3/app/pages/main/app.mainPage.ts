import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {Login} from '../login/app.login';
import {Mission} from '../mission/app.mission';
import {Rules} from '../rules/app.liveRules';
import {Stats} from '../stats/app.statistics';
import {Map} from '../map/app.gameMap';

@Component({
selector:'mainPage',
   templateUrl:'build/pages/main/mainPage.html',
})
export class mainPageComponent {
   time='XX:XX:XX ';

   status=false;
   statusText: any;
   statusColor: any;

   PSA1='-face of the playground, you little poopypants.';
   PSA2='-If only you could have known what';
   PSA3='-serious punishments your little smartypants';

   constructor(public navCtrl: NavController) {
      this.getStatusText();
      this.getStatusColor();
   }

   getStatusText(){
      if(this.status){
         this.statusText="Active";
      }else{
         this.statusText="Inactive";
      }
   }
   getStatusColor(){
      if(this.status){
         this.statusColor="green";
         return null;
      }else{
         this.statusColor="red";
         return null;
      }
   }

   pushLogin(){
      this.navCtrl.push(Login, {

      });
   }
   pushMission(){
      this.navCtrl.push(Mission);
   }
   pushRules(){
      this.navCtrl.push(Rules);
   }
   pushStats(){
      this.navCtrl.push(Stats);
   }
   pushMap(){
      this.navCtrl.push(Map, {
         id: "123",
         name: "Carl"
      });
   }
}
