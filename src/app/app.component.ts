import { Component, HostBinding } from '@angular/core';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import deMessages from "devextreme/localization/messages/es.json";
import {locale, loadMessages} from "devextreme/localization";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService) { 
    loadMessages(deMessages);
    locale('es');
  }

  isAuthenticated() {
    return this.authService.loggedIn;
  }
}
