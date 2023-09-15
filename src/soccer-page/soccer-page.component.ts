import { NgFor, NgIf } from '@angular/common';
import {
  Component,
  DoCheck,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ITopLeague } from '../model/topLeague.model';
import { StandingTableComponent } from '../components/standing-table/standing-table.component';

const topLeague: ITopLeague[] = [
  { country: 'England', team: 'Premier League', idLeague: '39' },
  { country: 'Spain', team: 'La Liga', idLeague: '140' },
  { country: 'France', team: 'Ligue 1', idLeague: '61' },
  { country: 'Germany', team: 'Bundesliga', idLeague: '78' },
  { country: 'Italy', team: 'Serie A', idLeague: '135' },
];

@Component({
  selector: 'app-soccer-page',
  templateUrl: './soccer-page.component.html',
  styleUrls: ['./soccer-page.component.less'],
  standalone: true,
  imports: [NgIf, NgFor, StandingTableComponent, RouterModule],
})
export class SoccerPageComponent implements DoCheck {
  public topLeague = topLeague;

  public displayReset: WritableSignal<boolean> = signal(false);

  private router: Router = inject(Router);

  constructor() {}

  ngDoCheck() {
    if (this.router.url === '/') {
      this.displayReset.set(false);
    } else {
      this.displayReset.set(true);
    }
  }
}
