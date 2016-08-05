

import{Component,OnInit,OnDestroy} from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {Data} from './data';
import{DataService} from './app.dataGet';

@Component({
    selector:'live-rules',
    templateUrl:'app/liveRules.html',
    directives: [ROUTER_DIRECTIVES],
})
export class rulesComponent implements OnInit,OnDestroy{
    info: Data[];
    dynamicRules="";
    staticRules="";
    constructor(
        private dataService: DataService,
        private route: ActivatedRoute) {
    }
    ngOnInit(){
        this.getData();

    }
    ngOnDestroy(){

    }
    getData() {

        this.dataService.getData(1,"id").then(egg => this.dynamicRules = egg);
        this.dataService.getData(2,"name").then(egg => this.staticRules = egg);
    }
}
