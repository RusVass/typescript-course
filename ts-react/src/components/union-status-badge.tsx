type RequestStatus =
  | { kind: "idle" }
  | { kind: "loading"; message?: string }
  | { kind: "success"; completedAt: string }
  | { kind: "error"; error: string };

interface UnionStatusBadgeProps {
  status: RequestStatus;
}

const assertNever = (value: never): never => {
  throw new Error(`Unhandled status: ${JSON.stringify(value)}`);
};

export function UnionStatusBadge({ status }: UnionStatusBadgeProps) {
  const label = (() => {
    switch (status.kind) {
      case "idle":
        return "Idle";
      case "loading":
        return status.message ?? "Loading...";
      case "success":
        return `Success at ${status.completedAt}`;
      case "error":
        return `Error: ${status.error}`;
      default:
        return assertNever(status);
    }
  })();

  return <span className={`status-badge status-badge--${status.kind}`}>{label}</span>;
}

export type { RequestStatus };

