import{Component,OnInit,OnDestroy} from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector:'live-rules',
    templateUrl:'app/liveRules.html',
    directives: [ROUTER_DIRECTIVES],
})
export class rulesComponent implements OnInit,OnDestroy{
    dynamicRules="stunTumers etc";
    staticRules="butts";
    ngOnInit(){

    }
    ngOnDestroy(){

    }
}
