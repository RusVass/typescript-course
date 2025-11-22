import { useState, type ChangeEvent, type FormEvent } from "react";

interface ContactFormValues {
  name: string;
  email: string;
  level: "beginner" | "advanced";
}

type FormField = keyof ContactFormValues;

const emptyForm: ContactFormValues = {
  name: "",
  email: "",
  level: "beginner",
};

export function FormExample() {
  const [form, setForm] = useState<ContactFormValues>(emptyForm);
  const [submitted, setSubmitted] = useState<ContactFormValues | null>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ): void => {
    const { name, value } = event.target;
    const field = name as FormField;
    const fieldValue = value as ContactFormValues[FormField];
    setForm((prev) => ({ ...prev, [field]: fieldValue }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setSubmitted(form);
    setForm(() => emptyForm);
  };

  return (
    <form className="form-example" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Ada Lovelace"
          required
        />
      </label>

      <label>
        Email
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="ada@typescript.dev"
          required
        />
      </label>

      <label>
        Level
        <select name="level" value={form.level} onChange={handleChange}>
          <option value="beginner">Beginner</option>
          <option value="advanced">Advanced</option>
        </select>
      </label>

      <button type="submit">Send</button>

      {submitted && (
        <output>
          Last payload: <code>{JSON.stringify(submitted)}</code>
        </output>
      )}
    </form>
  );
}

