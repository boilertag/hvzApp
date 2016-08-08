import { Component } from '@angular/core';
import {Data} from './data.ts'
import {DataService} from './app.dataGet'
import { ROUTER_DIRECTIVES } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [DataService]
})
export class FPComponent implements OnInit {
    info: String;
    title = 'Tour of Heroes';
    constructor(private dataService: DataService) { }
    getData() {
        this.dataService.getData(1,"name").then(info=>this.info=info);
    }
    ngOnInit() {
        this.getData();
    }
}
