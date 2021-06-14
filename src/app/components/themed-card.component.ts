import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'themed-card',
  templateUrl: 'themed-card.component.html'
})
export class ThemedCardComponent {
  @Input() heading: string = 'Heading';
  @Input() body: string = 'Some descriptive text.';
  @Input() color: string = 'primary';
  @Input() size: number = 328;

  cardClass = () => `rounded m4 card-outline-${this.color}`;
  headerClass = () => `background-${this.color}`;
  bodyClass = () => `my8 color-${this.color}`;
}
