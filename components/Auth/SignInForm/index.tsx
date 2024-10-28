"use client";

import { login } from "@/actions/auth";
import { BaseButton } from "@/components/Base/Button";
import { BaseInput } from "@/components/Base/Input";
import { BaseLabel } from "@/components/Base/Label";
import { useFormStatus } from "react-dom";

type AuthSignInFormProps = React.FormHTMLAttributes<HTMLFormElement>;

export function AuthSignInForm({ ...props }: Readonly<AuthSignInFormProps>) {
  return (
    <form action={login} {...props}>
      <div>
        <BaseLabel htmlFor="email">Email</BaseLabel>
        <BaseInput id="email" name="email" type="email" />
      </div>

      <div>
        <BaseLabel htmlFor="password">Password</BaseLabel>
        <BaseInput id="password" name="password" type="password" />
      </div>

      <SubmitButton>Sign in</SubmitButton>
    </form>
  );
}

type SubmitButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function SubmitButton({ ...props }: Readonly<SubmitButtonProps>) {
  const { pending } = useFormStatus();

  return (
    <BaseButton
      loading={pending}
      disabled={pending}
      className="w-full flex justify-center items-center"
      {...props}
    />
  );
}
