export function buildDictionary<T>(items: readonly T[], getKey: (item: T) => string): Record<string, T> {
  return items.reduce<Record<string, T>>((acc, item) => {
    acc[getKey(item)] = item;
    return acc;
  }, {});
}

export function withTimestamp<T extends object>(value: T): T & { timestamp: number } {
  return { ...value, timestamp: Date.now() };
}

