export default function formatDate(date) {
  return `${date.getUTCMonth() + 1}.${date.getUTCDate()}.${date.getUTCFullYear()}`
}