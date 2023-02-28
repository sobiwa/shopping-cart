export default function formatDate(date) {
  return `${date.getMonth() + 1}.${date.getDay()}.${date.getFullYear()}`
}