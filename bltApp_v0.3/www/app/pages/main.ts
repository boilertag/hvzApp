import { bootstrap }    from '@angular/platform-browser-dynamic';
import { FPComponent } from './app.FrontPage';
import { appRouterProviders } from './app.routes';
bootstrap(FPComponent,[
    appRouterProviders
]);
