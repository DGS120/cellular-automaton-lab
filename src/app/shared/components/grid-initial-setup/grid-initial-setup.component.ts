import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CellState } from '../../interface/cellState.interface';

export interface IGridCell {
  row: number;
  column: number;
  status: 'dead' | 'alive';
}

@Component({
  selector: 'app-grid-initial-setup',
  templateUrl: './grid-initial-setup.component.html',
  styleUrls: ['./grid-initial-setup.component.scss'],
})
export class GridInitialSetupComponent implements OnInit {
  @Input() rows!: number;
  @Input() cols!: number;
  @Output() setInitialState: EventEmitter<Array<Array<CellState>>> =
    new EventEmitter<Array<Array<CellState>>>();

  public cells: IGridCell[] = [];

  ngOnInit(): void {
    this.cells = this.initCells();
  }

  private initCells(): IGridCell[] {
    let result: IGridCell[] = [];
    for (let i = 0; i < this.rows; i++) {
      const row: IGridCell[] = new Array(this.cols).fill(0).map((_, index) => ({
        row: i,
        column: index,
        status: 'dead',
      }));

      result = [...result, ...row];
    }

    return result;
  }

  public handleClick(cell: IGridCell): void {
    cell.status = cell.status === 'dead' ? 'alive' : 'dead';
  }

  public handleSubmit(): void {
    const result: Array<Array<CellState>> = [];

    let counter = 0;
    let row: Array<CellState> = [];
    this.cells.forEach(cell => {
      if (counter === this.cols - 1) {
        row.push(cell.status === 'alive' ? 1 : 0);
        result.push(row);
        row = [];
        counter = 0;
      } else {
        row.push(cell.status === 'alive' ? 1 : 0);
        counter += 1;
      }
    });

    this.setInitialState.emit(result);
  }

  public reset(): void {
    this.cells = this.initCells();
  }
}
