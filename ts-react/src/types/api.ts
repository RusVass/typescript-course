export interface ApiRequest<TResponse> {
  url: string;
  options?: RequestInit;
  parser?: (payload: unknown) => TResponse;
}

export interface ApiTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

