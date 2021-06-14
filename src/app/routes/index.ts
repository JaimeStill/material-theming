import { Route } from '@angular/router';
import { ElevationRoute } from './elevation';
import { GlowRoute } from './glow';
import { HomeRoute } from './home';
import { SetupRoute } from './setup';
import { SnackerRoute } from './snacker';
import { ThemeRoute } from './theme';


export const RouteComponents = [
  ElevationRoute,
  GlowRoute,
  HomeRoute,
  SetupRoute,
  SnackerRoute,
  ThemeRoute
];

export const Routes: Route[] = [
  { path: '', component: HomeRoute },
  { path: 'elevation', component: ElevationRoute },
  { path: 'glow', component: GlowRoute },
  { path: 'setup', component: SetupRoute },
  { path: 'snacker', component: SnackerRoute },
  { path: 'theme', component: ThemeRoute },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]
