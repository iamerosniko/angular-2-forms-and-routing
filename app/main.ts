import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
//import { enableProdMode } from '@angular/core'  // un comment this for PROD

//enableProdMode(); // un comment this for PROD
platformBrowserDynamic().bootstrapModule(AppModule);