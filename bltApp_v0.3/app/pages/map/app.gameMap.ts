import{Component} from '@angular/core';
import {NavParams} from 'ionic-angular';

@Component({
    selector:'game-map',
    templateUrl:'build/pages/map/gameMap.html',
})
export class mapComponent {
   constructor(private navParams: NavParams){
      let id = navParams.get('id');
      let name = navParams.get('name');
   }

   popView(){
      //this.navController.pop();
   }
}
