import { Component } from '@angular/core';

@Component({
  selector: 'theme-route',
  templateUrl: 'theme.route.html'
})
export class ThemeRoute {
  colors: string[] = [
    'primary', 'accent', 'warn',
    'red', 'pink', 'purple', 'deep-purple',
    'indigo', 'blue', 'light-blue', 'cyan',
    'teal', 'green', 'light-green', 'lime',
    'yellow', 'amber', 'orange', 'deep-orange',
    'brown', 'gray', 'blue-gray'
  ];

  color: string = 'primary';
}
