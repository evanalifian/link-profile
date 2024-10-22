export function getData() {
  const data = fetch('data.json').then(res => res.json())
  return data
}