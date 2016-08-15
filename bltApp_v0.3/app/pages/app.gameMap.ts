import{Component,OnInit,OnDestroy} from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector:'game-map',
    templateUrl:'app/gameMap.html',
    directives: [ROUTER_DIRECTIVES],
})
export class mapComponent implements OnInit,OnDestroy{
    ngOnInit(){

    }
    ngOnDestroy(){

    }
}
