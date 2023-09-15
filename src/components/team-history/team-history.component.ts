import { AsyncPipe, NgFor, NgIf, Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { IHistory } from '../../model/history.model';

@Component({
  selector: 'app-team-history',
  templateUrl: './team-history.component.html',
  styleUrls: ['./team-history.component.less'],
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, RouterModule],
})
export class TeamHistoryComponent implements OnInit {
  historyes$: Observable<IHistory[] | null> = of(null);

  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly location: Location = inject(Location);

  constructor() {}

  ngOnInit() {
    this.historyes$ = this.route.data.pipe(
      map(({ league: history }) => {
        return history;
      })
    );
  }

  backToTable() {
    this.location.back();
  }
}
