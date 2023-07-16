/* eslint-disable valid-typeof */
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (typeof this !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage')
    }
  }
}
