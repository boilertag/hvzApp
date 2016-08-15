import{Component,OnInit,OnDestroy} from '@angular/core';
import {NavParams} from 'ionic-angular';

@Component({
    selector:'stats',
    templateUrl:'build/pages/stats/stats.html',
})
export class Stats implements OnInit,OnDestroy{
    numHumans="1";
    numZombies="2";
    numKills="4";
    leaderboards="we Will handle this later";
    constructor(private navParams: NavParams){

    }

    ngOnInit(){

    }
    ngOnDestroy(){

    }
}
