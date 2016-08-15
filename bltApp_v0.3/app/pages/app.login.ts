import{Component,OnInit,OnDestroy} from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {Data} from './data';
import{DataService} from './app.dataGet';
@Component({
    selector:'login',
    templateUrl:'app/login.html',
    directives: [ROUTER_DIRECTIVES],
})
export class loginComponent implements OnInit,OnDestroy{
    userName="";
    passWord="";
    userPass: Data;
    ngOnInit(){

    }
    ngOnDestroy(){

    }
    loginPress(){
        this.userPass={id: this.userName, name: this.passWord};
        this.dataService.returnData(this.userPass);

    }
    constructor(
        private dataService: DataService,
        private route: ActivatedRoute) {
    }
}