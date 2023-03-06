export default function roundTo2(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}