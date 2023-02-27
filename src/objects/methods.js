/* eslint-disable object-shorthand */
/* eslint-disable func-names */
const circle = {
  radius: 5,
  getDiameter: function () {
    return 2 * this.radius;
  },
};

console.log(circle.getDiameter());
