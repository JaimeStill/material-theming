import { AppService } from './app.service';
import { SnackerService } from './snacker.service';
import { ThemeService } from './theme.service';

export const Services = [
  AppService,
  SnackerService,
  ThemeService
];

export * from './app.service';
export * from './highlighter.service';
export * from './snacker.service';
export * from './theme.service';
