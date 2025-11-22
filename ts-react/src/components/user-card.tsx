import type { ReactNode } from "react";
import type { UserProfile } from "../types/user.ts";

interface UserCardProps {
  user: UserProfile;
  subtitle?: string;
  highlightRole?: boolean;
  footer?: ReactNode;
}

const defaultSubtitle = "TypeScript enthusiast";

export function UserCard({
  user,
  subtitle = defaultSubtitle,
  highlightRole = false,
  footer,
}: UserCardProps) {
  return (
    <article className={`user-card ${highlightRole ? "user-card--highlight" : ""}`}>
      <header>
        <h3>{user.name}</h3>
        <span>{user.role}</span>
      </header>

      <p>{subtitle}</p>

      <dl>
        <div>
          <dt>Email</dt>
          <dd>{user.email}</dd>
        </div>
        {user.location && (
          <div>
            <dt>Location</dt>
            <dd>{user.location}</dd>
          </div>
        )}
        {user.favoriteStack && (
          <div>
            <dt>Stack</dt>
            <dd>{user.favoriteStack}</dd>
          </div>
        )}
      </dl>

      {footer}
    </article>
  );
}

