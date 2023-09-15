import { IScore } from "./score.model";
import { ITeam } from "./team.model";

export interface IStanding {
  rank: number;
  team: ITeam;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: IScore;
  home: IScore;
  away: IScore;
}
