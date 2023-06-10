import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnDestroy {
  routeSub!: Subscription;
  currentTeam: string = '';
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.currentTeam = params['id']
    });
  }
  
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
  
}