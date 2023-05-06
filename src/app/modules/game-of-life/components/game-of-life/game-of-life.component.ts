/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cloneDeep, random } from 'lodash';
import { CellState } from 'src/app/shared/interface/cellState.interface';
import { Utils } from 'src/app/utils/Utils';

const WIDTH = 500;
const HEIGHT = 500;
const RESOLUTION = 10;

@Component({
  selector: 'app-game-of-life',
  templateUrl: './game-of-life.component.html',
  styleUrls: ['./game-of-life.component.scss'],
})
export class GameOfLifeComponent implements AfterViewInit {
  @ViewChild('gameoflife', { static: false })
  grid!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private cells!: Array<Array<CellState>>;
  public generation = 0;
  public selectedNeighborhood: 'moore' | 'neumann' = 'moore';
  public selectedInitialState: 'random' | 'custom' = 'random';
  public customCellValueForm!: FormGroup;
  public timerId: any;

  constructor(private fb: FormBuilder) {
    this.initCells(true);
    this.initForm();
  }

  ngAfterViewInit(): void {
    this.grid.nativeElement.width = WIDTH;
    this.grid.nativeElement.height = HEIGHT;

    this.ctx = this.grid.nativeElement.getContext('2d')!;
    this.render();
  }

  private initForm() {
    this.customCellValueForm = this.fb.group({
      row: [0, [Validators.required, Validators.min(0), Validators.max(49)]],
      col: [0, [Validators.required, Validators.min(0), Validators.max(49)]],
      value: ['', [Validators.required]],
    });
  }

  public submitCustomCell() {
    const { row, col, value } = this.customCellValueForm.value;

    this.cells[row][col] = Number(value) as CellState;
    this.render();
    this.customCellValueForm.reset();
  }

  public reset() {
    this.generation = 0;
    this.stopSimulation();
    this.initCells(this.selectedInitialState === 'random' ? true : false);
    this.render();
  }

  public simulate() {
    this.timerId = setInterval(() => {
      this.applyRule();
      this.render();
      this.generation += 1;
    }, 1000);
  }

  public stopSimulation() {
    clearInterval(this.timerId);
    this.timerId = null;
  }

  public incrementalyApplyRule() {
    this.applyRule();
    this.render();
    this.generation += 1;
  }

  private initCells(random: boolean): void {
    if (random) {
      this.cells = new Array(HEIGHT / RESOLUTION)
        .fill(0)
        .map(() =>
          new Array(WIDTH / RESOLUTION)
            .fill(0)
            .map(() => Utils.getRandomState(0.8))
        );
    } else {
      this.cells = new Array(HEIGHT / RESOLUTION)
        .fill(0)
        .map(() => new Array(WIDTH / RESOLUTION).fill(0));
    }
  }

  private render(): void {
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

  private applyRule(): void {
    const initialState: Array<Array<CellState>> = cloneDeep(this.cells);
    initialState.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        let numberOfAliveNeighbors = 0;

        if (this.selectedNeighborhood === 'moore') {
          numberOfAliveNeighbors = Utils.countAliveNeighborsByMoore(
            initialState,
            rowIndex,
            colIndex
          );
        }

        if (this.selectedNeighborhood === 'neumann') {
          numberOfAliveNeighbors = Utils.countAliveNeighborsByVonNeumann(
            initialState,
            rowIndex,
            colIndex
          );
        }

        if (cell && numberOfAliveNeighbors < 2) {
          this.cells[rowIndex][colIndex] = 0;
          return;
        }

        if (
          cell &&
          (numberOfAliveNeighbors === 2 || numberOfAliveNeighbors === 3)
        ) {
          this.cells[rowIndex][colIndex] = 1;
          return;
        }

        if (cell && numberOfAliveNeighbors > 3) {
          this.cells[rowIndex][colIndex] = 0;
          return;
        }

        if (!cell && numberOfAliveNeighbors === 3) {
          this.cells[rowIndex][colIndex] = 1;
          return;
        }
      });
    });
  }

  public handleNeighborhoodTypeSelection(event: any) {
    this.selectedNeighborhood = event.target.value;
  }

  public handleInitialStateChange(event: any) {
    this.selectedInitialState = event.target.value;
    if (this.selectedInitialState === 'random') {
      this.initCells(true);
      this.render();
    } else {
      this.initCells(false);
      this.render();
    }

    this.generation = 0;
    this.timerId = null;
  }
}
