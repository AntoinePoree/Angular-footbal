import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ILeague } from '../model/league.model';
import { IStandingParams, SoccerService } from '../services/soccer.service';

export const LeagueResolver: ResolveFn<ILeague[] | null> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  soccerService: SoccerService = inject(SoccerService)
): Observable<ILeague[]> | null => {
  const id = route.paramMap.get('id');
  if (id) {
    // TODO, maybe we need to call Team season from api to know if we can use last season
    const year = new Date().getFullYear();
    const params: IStandingParams = {
      leagueId: +id,
      season: year,
    };
    return soccerService.getStandings(params);
  }
  return null;
};
