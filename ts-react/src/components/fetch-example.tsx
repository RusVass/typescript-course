import { useFetch } from "../hooks/use-fetch.ts";
import type { ApiRequest, ApiTodo } from "../types/api.ts";

const todoRequest: ApiRequest<ApiTodo> = {
  url: "https://jsonplaceholder.typicode.com/todos/1",
  parser: (payload) => {
    const todo = payload as Partial<ApiTodo>;
    return {
      id: Number(todo.id ?? 0),
      userId: Number(todo.userId ?? 0),
      title: String(todo.title ?? "Untitled todo"),
      completed: Boolean(todo.completed),
    };
  },
};

export function FetchExample() {
  const { data, error, isLoading, refetch } = useFetch<ApiTodo>(todoRequest);

  return (
    <div className="fetch-example">
      <p>Requesting: {todoRequest.url}</p>
      {isLoading && <p>Loading todo...</p>}
      {error && <p role="alert">Error: {error}</p>}
      {data && (
        <pre>
          {JSON.stringify(
            {
              id: data.id,
              title: data.title,
              completed: data.completed,
            },
            null,
            2,
          )}
        </pre>
      )}
      <button type="button" onClick={() => void refetch()}>
        Refetch
      </button>
    </div>
  );
}

