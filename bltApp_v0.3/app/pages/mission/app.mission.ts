import{Component,OnInit,OnDestroy} from '@angular/core';
import {NavParams} from 'ionic-angular';

@Component({
    selector:'mission',
    templateUrl:'build/pages/mission/mission.html',
})
export class Mission implements OnInit,OnDestroy{
    hMission="";
    zMission="";
    hMissionS="";
    zMissionS="";
    mission="buttsMission";
    missionStatus="butt is being a butt";

    constructor(private navParams: NavParams){
    }
    ngOnInit(){

    }
    ngOnDestroy(){

    }
}
