/* eslint-disable valid-typeof */
/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === String) {
      this._name = name;
    } else {
      throw TypeError('Name must be a string')
    }

    if (typeof length === Number) {
      this._number = Number;
    } else {
      throw TypeError('Length must be a number')
    }

    this._students = students;
  }
}
