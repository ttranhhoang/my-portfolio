const capitalize = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

const clamp = (value: number) => Math.max(0, value);

const isBetween = (value: number, floor: number, celi: number) => value >= floor && value <= celi;

export  { capitalize, clamp, isBetween };
