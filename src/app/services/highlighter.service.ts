import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as prism from 'prismjs';

import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript';

@Injectable()
export class HighlighterService {
  constructor(
    private http: HttpClient
  ) { }

  highlight = (code: string, lang: string) => prism.highlight(code, prism.languages[lang || 'js'], lang || 'js');

  highlightRemote = (url: string, lang: string): Promise<string | null> => new Promise((resolve) => {
    this.http.get(url, { responseType: 'text' })
      .subscribe(
        res => {
          console.log(res);
          resolve(this.highlight(res, lang));
        },
        err => {
          console.log(err.message);
          resolve(null);
        }
      );
  })
}
