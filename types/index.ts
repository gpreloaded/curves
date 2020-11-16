export type Vector2D = {
  x: number;
  y: number;
};

export type GraphContext = {
  scale: Vector2D;
  x: Range;
  y: Range;
};

export type Range = {
  max: number;
  min: number;
};
