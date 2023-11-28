export interface ISeed {
  Type?: string;
  Number?: number;
  'Area (mm^2)'?: number;
  'Perimeter (mm)'?: number;
  Circularity: number;
  'Major Axis Length (mm)'?: number;
  'Minor Axis Length (mm)'?: number;
  contrast?: number;
  dissimilarity?: number;
  homogeneity?: number;
  ASM?: number;
  energy?: number;
  correlation?: number;
}

export interface ISeedsResponseData {
  filename: string;
  result?: ISeed[];
}
