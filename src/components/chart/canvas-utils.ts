type CurveProps = {
  radius?: number,
  side?: 'RHS' | 'LHS'
}

export const drawArrowLine = (context: CanvasRenderingContext2D,
  x1, y1, x2, y2, props?: CurveProps & {
    arrowSize?: number
  }) => {
  const arrowSize = props?.arrowSize ?? 10;
  drawCurve(context, x1, y1, x2, y2, props);
  if (props?.side === 'LHS') {
    drawArrow(context, x2, y2, x1 > x2 ? Math.PI : 0, arrowSize, arrowSize);
  }
  else {
    drawArrow(context, x2, y2, y1 < y2 ? Math.PI / 2 : -Math.PI / 2, arrowSize, arrowSize);
  }
}

/**
 * x,y are tip position instead of center
 */
export const drawArrow = (context: CanvasRenderingContext2D,
  x: number, y: number, angle: number | 'Left' | 'Right' | 'Up' | 'Down', w: number, h: number) => {
    if (typeof angle === 'string'){
      switch (angle){
        case "Left":
          angle = 0
          break
        case "Right":
          angle = Math.PI
          break
        case "Up":
          angle = Math.PI/2
          break
        case "Down":
          angle = -Math.PI/2
          break
      }
    }
  context.translate(x, y);
  context.rotate(angle);
  context.translate(- w, - h / 2);

  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(0, h);
  context.lineTo(w, h / 2);
  context.closePath();
  context.fill();

  /// reset context
  context.translate(w, h / 2)
  context.rotate(-angle)
  context.translate(-x, -y)

}

export const drawPoint = (context: CanvasRenderingContext2D,
  x: number, y: number, r: number = 1,
) => {
  context.fillRect(x - r / 2, y - r / 2, r, r);
}

export const drawCurve = (context: CanvasRenderingContext2D,
  x1: number, y1: number, x2: number, y2: number, props?: CurveProps
) => {
  const r = props?.radius ?? 0.3;
  if (props?.side === 'LHS') {
    const x3 = x1
    const y3 = y2
    context.beginPath()
    context.moveTo(x1, y1)
    context.lineTo(x1, percentage(y1, y3, r))
    context.quadraticCurveTo(x3, y3, percentage(x2, x3, r), y2);
    context.lineTo(x2, y2)
  }
  else {
    const x3 = x2
    const y3 = y1
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(percentage(x1, x3, r), y1)
    context.quadraticCurveTo(x3, y3, x2, percentage(y2, y3, r));
    context.lineTo(x2, y2)

  }
  context.stroke();
  context.closePath();
}

export const mm = (value, min, max) => Math.max(min, Math.min(max, value));

const percentage = (a, b, p) => a * p + b * (1 - p)