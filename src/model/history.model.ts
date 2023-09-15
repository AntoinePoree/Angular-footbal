import { ILeague } from './league.model';

interface IMatchDetail {
  id: number;
  logo: string;
  name: string;
  winner: boolean;
}

interface IScoreDetail {
  away: number;
  home: number;
}

interface IFixture {
  date: string;
  id: number;
  periods: { first: number; second: number };
  referee: string;
  status: { long: string; short: string; elapsed: number };
  timestamp: number;
  timezone: string;
  venue: {
    city: string;
    id: number;
    name: string;
  };
}

export interface IHistory {
  fixture: IFixture;
  goals: IScoreDetail;
  league: ILeague;
  score: {
    extratime: IScoreDetail;
    fulltime: IScoreDetail;
    halftime: IScoreDetail;
    penalty: IScoreDetail;
  };
  teams: {
    away: IMatchDetail;
    home: IMatchDetail;
  };
}
