import { useMemo, type ReactNode } from "react";
import { buildDictionary, withTimestamp } from "../utils/generic-helpers.ts";

interface ListWithGenericsProps<TItem> {
  title: string;
  items: readonly TItem[];
  getKey: (item: TItem) => string;
  renderItem: (item: TItem) => ReactNode;
}

export const ListWithGenerics = <TItem,>({
  title,
  items,
  getKey,
  renderItem,
}: ListWithGenericsProps<TItem>) => {
  const dictionary = useMemo(() => buildDictionary(items, getKey), [items, getKey]);
  const timestamped = withTimestamp(dictionary);

  return (
    <div className="generic-list">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={getKey(item)}>{renderItem(item)}</li>
        ))}
      </ul>
      <small>Dictionary snapshot: {JSON.stringify(timestamped)}</small>
    </div>
  );
};

