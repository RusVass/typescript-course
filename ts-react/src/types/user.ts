export interface UserProfile {
  id: number;
  name: string;
  role: "mentor" | "student";
  email: string;
  location?: string;
  favoriteStack?: string;
}

export interface ContactMethod {
  type: "email" | "chat";
  value: string;
}

