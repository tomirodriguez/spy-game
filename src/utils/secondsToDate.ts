export const secondsToDate = (seconds: number) =>
  new Date(seconds * 1000).toISOString().slice(15, 19);
