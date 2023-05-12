/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CellState } from 'src/app/shared/interface/cellState.interface';
import { Utils } from 'src/app/utils/Utils';
import { CANVAS_DEFAULT_CONFIG } from 'src/app/utils/canvas-default-configuration';
import { rule30 } from 'src/app/utils/rule-30';

const WIDTH = 1200;
const RESOLUTION = 2;
const TIME_PER_GENERATION = 300;

@Component({
  selector: 'app-rule-thirty',
  templateUrl: './rule-thirty.component.html',
  styleUrls: ['./rule-thirty.component.scss'],
})
export class RuleThirtyComponent implements AfterViewInit {
  @ViewChild('ruleThirty', { static: false })
  grid!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private cells!: Array<Array<CellState>>;
  public timerId: any;
  public generation = 0;
  public selectedInitialState: 'random' | 'one' = 'random';

  constructor() {
    this.cells = this.initCells();
  }

  ngAfterViewInit(): void {
    this.grid.nativeElement.width = WIDTH;
    this.grid.nativeElement.height = CANVAS_DEFAULT_CONFIG.HEIGHT;

    this.ctx = this.grid.nativeElement.getContext('2d')!;
    this.render();
  }

  private render(): void {
    if (this.cells.length - 1 > CANVAS_DEFAULT_CONFIG.HEIGHT / RESOLUTION) {
      this.grid.nativeElement.height += RESOLUTION;
    }
    this.cells.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        this.ctx.beginPath();
        this.ctx.rect(
          colIndex * RESOLUTION,
          rowIndex * RESOLUTION,
          RESOLUTION,
          RESOLUTION
        );
        this.ctx.fillStyle = cell ? 'black' : 'white';
        this.ctx.fill();
        this.ctx.closePath();
      });
    });
  }

  private initCells(random = true): Array<Array<CellState>> {
    if (random) {
      return new Array(1)
        .fill(0)
        .map(() =>
          new Array(WIDTH / RESOLUTION)
            .fill(0)
            .map(() => Utils.getRandomState(0.8))
        );
    } else {
      const middleIndex = Math.round((WIDTH / RESOLUTION - 1) / 2);
      console.log(middleIndex);
      return new Array(1)
        .fill(0)
        .map(() =>
          new Array(WIDTH / RESOLUTION)
            .fill(0)
            .map((_, idx) => (idx === middleIndex ? 1 : 0))
        );
    }
  }

  private applyRule(): void {
    const newRow = this.cells[this.cells.length - 1].map((cell, idx, row) => {
      if (idx === 0) {
        return rule30(cell, row[row.length - 1], row[idx + 1]);
      }

      if (idx === row.length - 1) {
        return rule30(cell, row[idx - 1], row[0]);
      }

      return rule30(cell, row[idx - 1], row[idx + 1]);
    });

    this.cells.push(newRow);
  }

  public simulate() {
    this.timerId = setInterval(() => {
      this.applyRule();
      this.render();
      this.generation += 1;
    }, TIME_PER_GENERATION);
  }

  public stopSimulation() {
    clearInterval(this.timerId);
    this.timerId = null;
  }

  public handleInitialStateChange(event: any) {
    this.selectedInitialState = event.target.value;
    if (this.selectedInitialState === 'random') {
      this.cells = this.initCells(true);
      this.render();
    } else {
      this.cells = this.initCells(false);
      this.render();
    }

    this.generation = 0;
    this.timerId = null;
  }

  public reset() {
    this.generation = 0;
    this.stopSimulation();
    this.cells = this.cells.map(row => row.map(cell => 0));
    this.render();
    this.cells = this.initCells(
      this.selectedInitialState === 'random' ? true : false
    );
    this.render();
  }
}
