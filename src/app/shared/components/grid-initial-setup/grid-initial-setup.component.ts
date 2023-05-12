import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-initial-setup',
  templateUrl: './grid-initial-setup.component.html',
  styleUrls: ['./grid-initial-setup.component.scss'],
})
export class GridInitialSetupComponent {
  @Input() rows!: number;
  @Input() cols!: number;
}
