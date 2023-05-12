import { CellState } from 'src/app/shared/interface/cellState.interface';

export const rule30 = (
  currentCell: CellState,
  leftCell: CellState,
  rightCell: CellState
): CellState => (leftCell ^ (currentCell || rightCell)) as CellState;
