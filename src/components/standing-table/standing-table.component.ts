import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';

import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { ILeague } from '../../model/league.model';

@Component({
  selector: 'app-standing-table',
  templateUrl: './standing-table.component.html',
  styleUrls: ['./standing-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, RouterModule],
})
export class StandingTableComponent implements OnInit {
  league$: Observable<ILeague | null> = of(null);

  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.league$ = this.route.data.pipe(
      map(({ league }) => {
        if (league && league[0]) return league[0].league;
      })
    );
  }
}
