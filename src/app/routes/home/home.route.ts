import { Component } from '@angular/core';
import { AppService } from '../../services';

@Component({
  selector: 'home-route',
  templateUrl: 'home.route.html'
})
export class HomeRoute {
  constructor(
    public app: AppService
  ) { }
}
