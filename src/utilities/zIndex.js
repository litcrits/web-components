const indexes = [
  'slider',
  'menu',
];

const indexObject = {};
indexes.forEach((zIndex, index) => {
  indexObject[zIndex] = (index + 1) * 10;
});

export default indexObject;
