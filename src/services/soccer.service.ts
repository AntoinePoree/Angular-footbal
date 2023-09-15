import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { getDataFromLocalStorage } from '../functions/localStorage';
import { IApiResponse } from '../model/api-response.model';
import { ILeague } from '../model/league.model';
import { IHistory } from '../model/history.model';

const BASE_URL = 'https://v3.football.api-sports.io';

export interface IStandingParams {
  leagueId: number;
  season: number;
}

export interface IMatchHistoryParams {
  teamId: number;
  season: number;
}

@Injectable({
  providedIn: 'root',
})
export class SoccerService {
  constructor(private http: HttpClient) {}

  getStandings(params: IStandingParams): Observable<ILeague[]> {
    const key = params.season.toString() + params.leagueId.toString();
    const item = getDataFromLocalStorage(key);
    if (item) return item;

    return this.http
      .get<IApiResponse<ILeague, IStandingParams>>(
        `${BASE_URL}/standings?league=${params.leagueId}&season=${params.season}`
      )
      .pipe(
        map((res) => {
          this.handleRequestAndStoreResult(res, key);
          return res.response;
        })
      );
  }

  getMatchHistory(params: {
    season: number;
    teamId: number;
  }): Observable<IHistory[]> {
    const key = params.season.toString() + params.teamId.toString();
    const item = getDataFromLocalStorage(key);
    if (item) return item;

    return this.http
      .get<IApiResponse<IHistory, IMatchHistoryParams>>(
        `${BASE_URL}/fixtures?team=${params.teamId}&season=${params.season}`
      )
      .pipe(
        map((res) => {
          this.handleRequestAndStoreResult(res, key);
          return res.response;
        })
      );
  }

  private handleRequestAndStoreResult(
    res: IApiResponse<
      ILeague | IHistory,
      IStandingParams | IMatchHistoryParams
    >,
    key: string
  ) {
    if (
      (Array.isArray(res.errors) && res.errors.length) ||
      (!Array.isArray(res.errors) && res.errors.requests)
    ) {
      console.error(res.errors);
    }

    if (res.response.length) {
      localStorage.setItem(key, JSON.stringify(res.response));
    }
  }
}
