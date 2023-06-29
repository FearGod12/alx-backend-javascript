export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (!this.hasOwnProperty('evacuationWarningMessage')) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  evacuationWarningMessage() {}

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else {
      throw new Error('TypeError: sqft must be a number');
    }
  }
}
