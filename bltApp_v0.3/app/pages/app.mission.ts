import{Component,OnInit,OnDestroy} from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector:'mission',
    templateUrl:'app/mission.html',
    directives: [ROUTER_DIRECTIVES],
})
export class missionComponent implements OnInit,OnDestroy{
    hMission="";
    zMission="";
    hMissionS="";
    zMissionS="";
    mission="buttsMission";
    missionStatus="butt is being a butt";
    ngOnInit(){

    }
    ngOnDestroy(){

    }
}
