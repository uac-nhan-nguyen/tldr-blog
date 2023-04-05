type TSNode = {
  name: string;
  type: 'string' | 'object' | 'number';
  properties: TSNode[];
}

export const parseTS = (source: string) : TSNode[] => {
  return [];
}