import{Component,OnInit,OnDestroy} from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector:'login',
    templateUrl:'app/login.html',
    directives: [ROUTER_DIRECTIVES],
})
export class loginComponent implements OnInit,OnDestroy{
    userName="";
    passWord="";
    ngOnInit(){

    }
    ngOnDestroy(){

    }
}