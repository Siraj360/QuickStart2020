import { Injectable } from '@angular/core';
import {SafeResourceUrl} from "@angular/platform-browser";

@Injectable()
export class AppState {

  aArr: any[] = [];
  aNum: number = 15;
  aStr: string = 'Test';

  constructor() {}

}
