import { IStanding } from './standing.model';

export interface ILeague {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: Array<Array<IStanding>>;
}
