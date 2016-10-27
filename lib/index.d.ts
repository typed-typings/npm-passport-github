import _Strategy = require('./strategy');

declare module './strategy' {
  export const Strategy: typeof _Strategy;
}

export = _Strategy;
