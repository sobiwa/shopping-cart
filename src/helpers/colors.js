const colors = [
  'rgb(255 238 0 / 50%)',
  'rgb(76 201 210 / 45%)',
  'rgb(149 231 51 / 50%)',
  'rgb(255 163 0 / 50%)',
  'rgb(255 50 172 / 33%)',
];

export default function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}