import { bootstrap }    from '@angular/platform-browser-dynamic';
import { FPComponent } from './app.FrontPage';
import { appRouterProviders } from './app.routes';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(FPComponent,[
    appRouterProviders,
    HTTP_PROVIDERS
]);
