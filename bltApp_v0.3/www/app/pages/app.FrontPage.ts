import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
    selector: 'my-app',
    template: `
        <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
    ]
})
export class FPComponent {
    title = 'Tour of Heroes';
    route='/test';
}
