/* eslint-disable @typescript-eslint/no-explicit-any */
import positionOnCircle, { IPositionOnCircle } from "./positionOnCircle";

interface ICircles {
  circles: IPositionOnCircle[];
}

const CENTER_X = 50;
const CENTER_Y = 50;
const RADIUS = 20;

const calculatePositions = (component: ICircles): any => {
  const angleIncrement = 360 / component.circles.length;
  const positions = {};
  component.circles.forEach((circle, index) => {
    (positions as any)[index] = positionOnCircle(
      RADIUS,
      angleIncrement * index,
      {
        x: CENTER_X,
        y: CENTER_Y,
      }
    );
  });
  return positions;
};

export default calculatePositions;
