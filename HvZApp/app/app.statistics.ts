import{Component,OnInit,OnDestroy} from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector:'stats',
    templateUrl:'app/stats.html',
    directives: [ROUTER_DIRECTIVES],
})
export class statsComponent implements OnInit,OnDestroy{
    numHumans="1";
    numZombies="2";
    numKills="4";
    leaderboards="we Will handle this later";
    ngOnInit(){

    }
    ngOnDestroy(){

    }
}
