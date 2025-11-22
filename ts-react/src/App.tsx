import "./App.css";
import { FeatureSection } from "./components/feature-section.tsx";
import { UserCard } from "./components/user-card.tsx";
import { FormExample } from "./components/form-example.tsx";
import { ListWithGenerics } from "./components/list-with-generics.tsx";
import { ReducerCounter } from "./components/reducer-counter.tsx";
import { UnionStatusBadge, type RequestStatus } from "./components/union-status-badge.tsx";
import { UtilityTypesDemo } from "./components/utility-types-demo.tsx";
import { FetchExample } from "./components/fetch-example.tsx";
import { ThemeProvider } from "./context/theme-context.tsx";
import { ThemeToggle } from "./components/theme-toggle.tsx";
import type { UserProfile } from "./types/user.ts";

const mentor: UserProfile = {
  id: 1,
  name: "Oksana Mentor",
  role: "mentor",
  email: "oksana@ts.dev",
  location: "Kyiv",
  favoriteStack: "Next.js + TS",
};

const mentees: UserProfile[] = [
  { id: 2, name: "Ivan Student", role: "student", email: "ivan@example.com", location: "Lviv" },
  {
    id: 3,
    name: "Kateryna Student",
    role: "student",
    email: "kateryna@example.com",
    location: "Odesa",
  },
];

const studyTopics = ["Generics", "Type narrowing", "Utility types", "Context API"] as const;

const statuses: RequestStatus[] = [
  { kind: "idle" },
  { kind: "loading", message: "Fetching users..." },
  { kind: "success", completedAt: new Date().toLocaleTimeString() },
  { kind: "error", error: "Network unreachable" },
];

export default function App() {
  return (
    <ThemeProvider>
      <main className="playground">
        <header className="playground__header">
          <div>
            <p className="eyebrow">TS Examples Playground</p>
            <h1>Практичні TypeScript патерни у React</h1>
            <p>Короткі, самодостатні приклади для щоденного проектування.</p>
          </div>
          <ThemeToggle />
        </header>

        <FeatureSection
          title="Typed props, опції, дефолтні значення та children"
          summary="UserCard показує контракт пропсів і приймає довільний footer через children."
        >
          <UserCard
            user={mentor}
            subtitle="Веде курс з глибоким фокусом на TS"
            highlightRole
            footer={<small>last updated {new Date().toLocaleDateString()}</small>}
          />
        </FeatureSection>

        <FeatureSection
          title="Typing форм та подій"
          summary="useState з інтерфейсом форми + типи ChangeEvent/FormEvent гарантують валідні поля."
        >
          <FormExample />
        </FeatureSection>

        <FeatureSection
          title="Generics у функціях та компонентах"
          summary="ListWithGenerics показує універсальний рендер, а buildDictionary забезпечує typed lookup."
        >
          <div className="stacked">
            <ListWithGenerics
              title="Менті"
              items={mentees}
              getKey={(person) => person.email}
              renderItem={(person) => `${person.name} — ${person.location ?? "Remote"}`}
            />
            <ListWithGenerics
              title="Теми"
              items={studyTopics}
              getKey={(topic) => topic}
              renderItem={(topic) => topic}
            />
          </div>
        </FeatureSection>

        <FeatureSection
          title="useReducer та суворо типізовані дії"
          summary="Discriminated union для CounterAction гарантує, що всі кейси оброблені."
        >
          <ReducerCounter />
        </FeatureSection>

        <FeatureSection
          title="Type narrowing + discriminated unions"
          summary="UnionStatusBadge звужує тип по ключу kind і малює бейджі стану."
        >
          <div className="status-grid">
            {statuses.map((status, index) => (
              <UnionStatusBadge key={`${status.kind}-${index}`} status={status} />
            ))}
          </div>
        </FeatureSection>

        <FeatureSection
          title="Utility Types на практиці"
          summary="Partial, Pick, Omit, Required, Readonly формують різні представлення користувача."
        >
          <UtilityTypesDemo />
        </FeatureSection>

        <FeatureSection
          title="Generic hook + типізований запит/відповідь"
          summary="useFetch<T> приймає ApiRequest<T> та повертає безпечні дані."
        >
          <FetchExample />
        </FeatureSection>
      </main>
    </ThemeProvider>
  );
}
