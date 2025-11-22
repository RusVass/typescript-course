import { useCallback, useEffect, useState } from "react";
import type { ApiRequest } from "../types/api.ts";

interface UseFetchState<TData> {
  data: TData | null;
  isLoading: boolean;
  error: string | null;
}

interface UseFetchResult<TData> extends UseFetchState<TData> {
  refetch: () => Promise<void>;
}

export function useFetch<TData>({ url, options, parser }: ApiRequest<TData>): UseFetchResult<TData> {
  const [state, setState] = useState<UseFetchState<TData>>({
    data: null,
    isLoading: true,
    error: null,
  });

  const load = useCallback(async (): Promise<void> => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const json = await response.json();
      const payload: TData = parser ? parser(json) : (json as TData);
      setState({ data: payload, isLoading: false, error: null });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      setState({ data: null, isLoading: false, error: message });
    }
  }, [url, options, parser]);

  useEffect(() => {
    void load();
  }, [load]);

  return { ...state, refetch: load };
}

