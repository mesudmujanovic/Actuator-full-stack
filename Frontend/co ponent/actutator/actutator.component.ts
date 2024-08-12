import { Component } from '@angular/core';
import { ActutatorService } from 'src/app/service/actutator.service';

@Component({
  selector: 'app-actutator',
  templateUrl: './actutator.component.html',
  styleUrls: ['./actutator.component.scss']
})
export class ActutatorComponent {
  health: any;
  metrics: any;
  info: any;

  constructor(private actuatorService: ActutatorService) { }

  ngOnInit(): void {
    this.actuatorService.getHealth().subscribe(data => {
      this.health = data;
    });

    this.actuatorService.getMetrics().subscribe(data => {
      this.metrics = data;
    });

    this.actuatorService.getInfo().subscribe(data => {
      this.info = data;
    });
  }
}
