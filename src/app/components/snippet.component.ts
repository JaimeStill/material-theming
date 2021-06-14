import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { HighlighterService } from '../services';

@Component({
  selector: 'snippet',
  templateUrl: 'snippet.component.html',
  providers: [HighlighterService]
})
export class SnippetComponent implements OnInit {
  @Input() url: string = '';
  @Input() lang: string = '';
  @Input() margin: string = 'm4';
  @Input() padding: string = 'p8';
  @Input() border: string = 'card-outline-accent';

  snippet: string = '';

  constructor(
    private highlighter: HighlighterService
  ) { }

  private init = async () => {
    const res = await this.highlighter.highlightRemote(this.url, this.lang);
    if (res) this.snippet = res;
  }

  ngOnInit() {
    this.init();
  }

  preStyle = () => `prism-theme language-${this.lang}`;
  codeStyle = () => `rounded ${this.margin} ${this.padding} ${this.border}`;
}
