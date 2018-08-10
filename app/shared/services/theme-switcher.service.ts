import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable()
export class ThemeSwitcherService {

  constructor() { }
  public darkTheme:  BehaviorSubject<boolean> = new BehaviorSubject(false);

  darkTheme$ = this.darkTheme.asObservable();

}
