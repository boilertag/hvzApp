import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {mapComponent} from '../map/app.gameMap';

@Component({
selector:'mainPage',
   templateUrl:'build/pages/main/mainPage.html',
})
export class mainPageComponent {
   constructor(public navCtrl: NavController) {
   }
   time='XX:XX:XX ';
   missionStatus='Active';
   PSA='hitler was an ok guy';

   pushPage(){
      this.navCtrl.push(mapComponent, {
         id: "123",
         name: "Carl"
      });
   }
}
