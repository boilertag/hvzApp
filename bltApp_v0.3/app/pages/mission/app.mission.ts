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
    background="\
    After successfully planting charges around the hive cluster,\
 the Resistance dealt a heavy blow to the Horde. Now crippled,\
the Horde is more vulnerable than ever. To secure our advantage,\
we'll need to establish an uplink to the quantum server core and RAM\
their MOBO. ";
    oTot1=5;
    oCom1=2;

    constructor(private navParams: NavParams){
    }
    ngOnInit(){

    }
    ngOnDestroy(){

    }
}
