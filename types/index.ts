export type Curve = {
  color?: string;
  eq: string;
};

export type GraphContext = Grid & {
  scale: Vector2D;
};

export type Grid = {
  x: Range;
  y: Range;
};

export type Range = {
  max: number;
  min: number;
};

export type Vector2D = {
  x: number;
  y: number;
};
