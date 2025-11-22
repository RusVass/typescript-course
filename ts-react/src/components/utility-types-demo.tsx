import type { UserProfile } from "../types/user.ts";

interface UtilityTypesSummary {
  base: UserProfile;
  partial: Partial<UserProfile>;
  picked: Pick<UserProfile, "name" | "role">;
  omitted: Omit<UserProfile, "favoriteStack">;
  completed: Required<UserProfile>;
  locked: Readonly<UserProfile>;
}

const baseUser: UserProfile = {
  id: 1,
  name: "Sara Coder",
  role: "mentor",
  email: "sara@ts.dev",
  favoriteStack: "React + TS",
};

const { favoriteStack: _, ...baseWithoutStack } = baseUser;

const utilityPreview: UtilityTypesSummary = {
  base: baseUser,
  partial: { name: "Partially Typed" },
  picked: { name: baseUser.name, role: baseUser.role },
  omitted: baseWithoutStack,
  completed: {
    id: baseUser.id,
    name: baseUser.name,
    role: baseUser.role,
    email: baseUser.email,
    location: "Remote",
    favoriteStack: baseUser.favoriteStack ?? "TypeScript",
  },
  locked: baseUser,
};

export function UtilityTypesDemo() {
  return (
    <div className="utility-demo">
      {Object.entries(utilityPreview).map(([label, value]) => (
        <div key={label}>
          <strong>{label}</strong>
          <pre>{JSON.stringify(value, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
}

