import{Component,OnInit,OnDestroy} from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector:'mainPage',
    templateUrl:'app/mainPage.html',
    directives: [ROUTER_DIRECTIVES],
})
export class mainPageComponent implements OnInit,OnDestroy{
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
