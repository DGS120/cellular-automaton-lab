import { CellState } from 'src/app/shared/interface/cellState.interface';

export class Utils {
  public static countAliveNeighborsByMoore(
    cells: Array<Array<CellState>>,
    rowIndex: number,
    colIndex: number
  ): number {
    let numberOfAliveNeighbors = 0;

    if (rowIndex === 0) {
      if (colIndex === 0) {
        cells?.[cells.length - 1]?.[colIndex]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[rowIndex]?.[colIndex + 1]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[rowIndex + 1]?.[colIndex]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[rowIndex]?.[cells?.[rowIndex].length - 1]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[cells.length - 1]?.[cells?.[cells.length - 1].length - 1]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[cells.length - 1]?.[colIndex + 1]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[rowIndex + 1]?.[cells?.[rowIndex + 1].length - 1]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[rowIndex + 1]?.[colIndex + 1]
          ? (numberOfAliveNeighbors += 1)
          : null;
        return numberOfAliveNeighbors;
      }

      if (colIndex === cells[rowIndex].length - 1) {
        cells?.[cells.length - 1]?.[colIndex]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[rowIndex]?.[0] ? (numberOfAliveNeighbors += 1) : null;
        cells?.[rowIndex + 1]?.[colIndex]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[rowIndex]?.[colIndex - 1]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[cells.length - 1]?.[colIndex - 1]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[cells.length - 1]?.[0] ? (numberOfAliveNeighbors += 1) : null;
        cells?.[rowIndex + 1]?.[colIndex - 1]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[rowIndex + 1]?.[0] ? (numberOfAliveNeighbors += 1) : null;
        return numberOfAliveNeighbors;
      }

      cells?.[cells.length - 1]?.[colIndex]
        ? (numberOfAliveNeighbors += 1)
        : null;
      cells?.[rowIndex]?.[colIndex + 1] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex + 1]?.[colIndex] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex]?.[colIndex - 1] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[cells.length - 1]?.[colIndex - 1]
        ? (numberOfAliveNeighbors += 1)
        : null;
      cells?.[cells.length - 1]?.[colIndex + 1]
        ? (numberOfAliveNeighbors += 1)
        : null;
      cells?.[rowIndex + 1]?.[colIndex - 1]
        ? (numberOfAliveNeighbors += 1)
        : null;
      cells?.[rowIndex + 1]?.[colIndex + 1]
        ? (numberOfAliveNeighbors += 1)
        : null;
      return numberOfAliveNeighbors;
    }

    if (colIndex === 0) {
      cells?.[rowIndex - 1]?.[colIndex] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex]?.[colIndex + 1] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex + 1]?.[colIndex] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex]?.[cells?.[rowIndex].length - 1]
        ? (numberOfAliveNeighbors += 1)
        : null;
      cells?.[rowIndex - 1]?.[cells?.[rowIndex].length - 1]
        ? (numberOfAliveNeighbors += 1)
        : null;
      cells?.[rowIndex - 1]?.[colIndex + 1]
        ? (numberOfAliveNeighbors += 1)
        : null;
      cells?.[rowIndex + 1]?.[cells?.[rowIndex].length - 1]
        ? (numberOfAliveNeighbors += 1)
        : null;
      cells?.[rowIndex + 1]?.[colIndex + 1]
        ? (numberOfAliveNeighbors += 1)
        : null;

      return numberOfAliveNeighbors;
    }

    if (colIndex === cells[rowIndex].length - 1) {
      cells?.[rowIndex - 1]?.[colIndex] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex]?.[0] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex + 1]?.[colIndex] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex]?.[colIndex - 1] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex - 1]?.[colIndex - 1]
        ? (numberOfAliveNeighbors += 1)
        : null;
      cells?.[rowIndex - 1]?.[0] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex + 1]?.[colIndex - 1]
        ? (numberOfAliveNeighbors += 1)
        : null;
      cells?.[rowIndex + 1]?.[0] ? (numberOfAliveNeighbors += 1) : null;

      return numberOfAliveNeighbors;
    }

    cells?.[rowIndex - 1]?.[colIndex] ? (numberOfAliveNeighbors += 1) : null;
    cells?.[rowIndex]?.[colIndex + 1] ? (numberOfAliveNeighbors += 1) : null;
    cells?.[rowIndex + 1]?.[colIndex] ? (numberOfAliveNeighbors += 1) : null;
    cells?.[rowIndex]?.[colIndex - 1] ? (numberOfAliveNeighbors += 1) : null;
    cells?.[rowIndex - 1]?.[colIndex - 1]
      ? (numberOfAliveNeighbors += 1)
      : null;
    cells?.[rowIndex - 1]?.[colIndex + 1]
      ? (numberOfAliveNeighbors += 1)
      : null;
    cells?.[rowIndex + 1]?.[colIndex - 1]
      ? (numberOfAliveNeighbors += 1)
      : null;
    cells?.[rowIndex + 1]?.[colIndex + 1]
      ? (numberOfAliveNeighbors += 1)
      : null;

    return numberOfAliveNeighbors;
  }

  public static countAliveNeighborsByVonNeumann(
    cells: Array<Array<CellState>>,
    rowIndex: number,
    colIndex: number
  ): number {
    let numberOfAliveNeighbors = 0;

    if (rowIndex === 0) {
      if (colIndex === 0) {
        cells?.[cells.length - 1]?.[colIndex]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[rowIndex]?.[colIndex + 1]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[rowIndex + 1]?.[colIndex]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[rowIndex]?.[cells?.[rowIndex].length - 1]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[rowIndex + 2]?.[colIndex]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[rowIndex]?.[colIndex + 2]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[cells.length - 2]?.[colIndex]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[rowIndex]?.[cells?.[rowIndex].length - 2]
          ? (numberOfAliveNeighbors += 1)
          : null;
        return numberOfAliveNeighbors;
      }

      if (colIndex === cells[rowIndex].length - 1) {
        cells?.[cells.length - 1]?.[colIndex]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[rowIndex]?.[cells?.[rowIndex].length - 1]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[rowIndex + 1]?.[colIndex]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[rowIndex]?.[colIndex - 1]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[rowIndex + 2]?.[colIndex]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[rowIndex]?.[cells?.[rowIndex].length - 2]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[cells.length - 2]?.[colIndex]
          ? (numberOfAliveNeighbors += 1)
          : null;
        cells?.[rowIndex]?.[colIndex - 2]
          ? (numberOfAliveNeighbors += 1)
          : null;

        return numberOfAliveNeighbors;
      }

      cells?.[cells.length - 1]?.[colIndex]
        ? (numberOfAliveNeighbors += 1)
        : null;
      cells?.[rowIndex]?.[colIndex + 1] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex + 1]?.[colIndex] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex]?.[colIndex - 1] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex + 2]?.[colIndex] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex]?.[colIndex + 2] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[cells.length - 2]?.[colIndex]
        ? (numberOfAliveNeighbors += 1)
        : null;
      cells?.[rowIndex]?.[colIndex - 2] ? (numberOfAliveNeighbors += 1) : null;

      return numberOfAliveNeighbors;
    }

    if (colIndex === 0) {
      cells?.[rowIndex - 1]?.[colIndex] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex]?.[colIndex + 1] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex + 1]?.[colIndex] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex]?.[cells?.[rowIndex].length - 1]
        ? (numberOfAliveNeighbors += 1)
        : null;
      cells?.[rowIndex + 2]?.[colIndex] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex]?.[colIndex + 2] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex - 2]?.[colIndex] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex]?.[cells?.[rowIndex].length - 2]
        ? (numberOfAliveNeighbors += 1)
        : null;

      return numberOfAliveNeighbors;
    }

    if (colIndex === cells[rowIndex].length - 1) {
      cells?.[rowIndex - 1]?.[colIndex] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex]?.[0] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex + 1]?.[colIndex] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex]?.[colIndex - 1] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex + 2]?.[colIndex] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex]?.[1] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex - 2]?.[colIndex] ? (numberOfAliveNeighbors += 1) : null;
      cells?.[rowIndex]?.[colIndex - 2] ? (numberOfAliveNeighbors += 1) : null;

      return numberOfAliveNeighbors;
    }

    cells?.[rowIndex - 1]?.[colIndex] ? (numberOfAliveNeighbors += 1) : null;
    cells?.[rowIndex]?.[colIndex + 1] ? (numberOfAliveNeighbors += 1) : null;
    cells?.[rowIndex + 1]?.[colIndex] ? (numberOfAliveNeighbors += 1) : null;
    cells?.[rowIndex]?.[colIndex - 1] ? (numberOfAliveNeighbors += 1) : null;
    cells?.[rowIndex + 2]?.[colIndex] ? (numberOfAliveNeighbors += 1) : null;
    cells?.[rowIndex]?.[colIndex + 2] ? (numberOfAliveNeighbors += 1) : null;
    cells?.[rowIndex - 2]?.[colIndex] ? (numberOfAliveNeighbors += 1) : null;
    cells?.[rowIndex]?.[colIndex - 2] ? (numberOfAliveNeighbors += 1) : null;

    return numberOfAliveNeighbors;
  }

  public static getRandomState(treshold = 0.5): CellState {
    return Math.random() > treshold ? 1 : 0;
  }
}
