export interface ISeeding {
  number?: string;
  day1: any;
  day2: any;
  day3: any;
  day4: any;
  day5: any;
  day6: any;
  day7: any;
  day8: any;
  day9: any;
  day10: any;
  day11: any;
  day12: any;
  nextStage: string;
}

export interface ISeedingResponseData {
  filename: string;
  result?: ISeeding[];
}
