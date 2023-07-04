export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let value = weakMap.get(endpoint) || 0;
  value += 1;
  weakMap.set(endpoint, value);
  if (value >= 5) {
    throw new Error('Endpoint load is high');
  }
}
