import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IHistory } from '../model/history.model';
import { IMatchHistoryParams, SoccerService } from '../services/soccer.service';

export const HistoryResolver: ResolveFn<IHistory[] | null> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  soccerService: SoccerService = inject(SoccerService)
): Observable<IHistory[]> | null => {
  const teamId = route.paramMap.get('teamId');
  if (teamId) {
    // TODO, maybe we need to call Team season from api to know if we can use last season
    const year = new Date().getFullYear();
    const params: IMatchHistoryParams = {
      teamId: +teamId,
      season: year,
    };
    return soccerService.getMatchHistory(params);
  }
  return null;
};
