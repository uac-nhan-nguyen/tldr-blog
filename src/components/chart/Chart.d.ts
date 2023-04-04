type Node = {
  content: string,
  x: number,
  y: number,
  dragging?: boolean,
  offsetX?: number,
  offsetY?: number,
  startX?: number,
  startY?: number,
}

type Link = {
  from: string,
  to: string,
}

export type ChartData = {
  nodes: Node[],
  links: Link[],
}
