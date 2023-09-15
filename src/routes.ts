import { Routes } from '@angular/router';
import { LeagueResolver } from './resolvers/league.resolver';
import { HistoryResolver } from './resolvers/history.resolver';

import { SoccerPageComponent } from './soccer-page/soccer-page.component';
import { StandingTableComponent } from './components/standing-table/standing-table.component';
import { TeamHistoryComponent } from './components/team-history/team-history.component';

export const routes: Routes = [
  {
    path: '',
    component: SoccerPageComponent,
    children: [
      {
        path: 'league/:id',
        component: StandingTableComponent,
        resolve: {
          league: LeagueResolver,
        },
      },
      {
        path: 'team/:teamId',
        component: TeamHistoryComponent,
        resolve: {
          league: HistoryResolver,
        },
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
