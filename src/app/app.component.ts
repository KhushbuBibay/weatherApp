import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  :host ::ng-deep button {
      margin-right: .5em;
  }
`]
})
export class AppComponent {
  title = 'weather-app';
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
