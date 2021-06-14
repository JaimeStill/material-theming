import { Injectable } from '@angular/core';
import { Link } from '../models';

@Injectable()
export class AppService {
  links: Array<Link> = [
    { url: 'setup', label: 'Setup' },
    { url: 'theme', label: 'Theme' },
    { url: 'snacker', label: 'Snacker' },
    { url: 'elevation', label: 'Elevation' },
    { url: 'glow', label: 'Glow' }
  ]
}
