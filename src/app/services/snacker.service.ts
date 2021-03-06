import { Injectable } from '@angular/core';

import {
  MatSnackBar,
  MatSnackBarConfig
} from '@angular/material/snack-bar';

@Injectable()
export class SnackerService {
  private config = new MatSnackBarConfig();

  constructor(private snackbar: MatSnackBar) {
    this.config.duration = 5000;
    this.config.panelClass = [];
  }

  private sendMessage = (message: string) => this.snackbar.open(message, 'Close', this.config);

  setDuration(duration: number) {
    this.config.duration = duration;
  }

  setClasses = (classes: string[]) => {
    classes.push('snacker');
    this.config.panelClass = classes;
  }

  sendColorMessage = (message: string, colors: string[]) => {
    this.setClasses(colors);
    this.sendMessage(message);
  }

  sendErrorMessage = (message: string) => this.sendColorMessage(message, ['snacker-red']);

  sendWarningMessage = (message: string) => this.sendColorMessage(message, ['snacker-orange']);

  sendSuccessMessage = (message: string) => this.sendColorMessage(message, ['snacker-green']);
}
