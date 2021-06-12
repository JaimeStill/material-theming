import { Route } from '@angular/router';
import { ElevationRoute } from './elevation';
import { GlowRoute } from './glow';
import { HomeRoute } from './home';
import { SnackerRoute } from './snacker';
import { ThemeRoute } from './theme';
import { UtilitiesRoute } from './utilities';


export const RouteComponents = [
  ElevationRoute,
  GlowRoute,
  HomeRoute,
  SnackerRoute,
  ThemeRoute,
  UtilitiesRoute
];

export const Routes: Route[] = [
  { path: '', component: HomeRoute },
  { path: 'elevation', component: ElevationRoute },
  { path: 'glow', component: GlowRoute },
  { path: 'snacker', component: SnackerRoute },
  { path: 'theme', component: ThemeRoute },
  { path: 'utilities', component: UtilitiesRoute },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]
