import {Component,OnInit,OnDestroy} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
import{ActivatedRoute} from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';
*/

@Component({
    selector:'mainPage',
    templateUrl:'build/pages/main/mainPage.html',
    //directives: [ROUTER_DIRECTIVES],
})
export class mainPageComponent implements OnInit,OnDestroy{
   constructor(public navCtrl: NavController) {

   }
    time='XX:XX:XX ';
    missionStatus='Active';
    PSA='hitler was an ok guy';

    ngOnInit(){

    }
    ngOnDestroy(){

    }
    clickButton1(){

    }

}
