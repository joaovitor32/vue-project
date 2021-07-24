import toRadians from "./toRadians";

export interface IPositionOnCircle {
  x: number;
  y: number;
}

const positionOnCircle = (
  radius: number,
  angle: number,
  center: IPositionOnCircle
): IPositionOnCircle => {
  return {
    x: center.x + radius * Math.cos(toRadians(angle)),
    y: center.y + radius * Math.sin(toRadians(angle)),
  };
};

export default positionOnCircle;
