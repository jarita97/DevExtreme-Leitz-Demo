import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'Dev Extreme Crud';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
