import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  constructor() { }
  showTodayDate() {
      let ndate = new Date();
      return ndate;
   }
}
