"use client";

import { signup } from "@/actions/auth";
import { BaseButton } from "@/components/Base/Button";
import { BaseFormField } from "@/components/Base/FormField";
import { BaseInput } from "@/components/Base/Input";
import { BaseLabel } from "@/components/Base/Label";
import { useFormState, useFormStatus } from "react-dom";

type AuthSignUpFormProps = React.FormHTMLAttributes<HTMLFormElement>;

export function AuthSignUpForm({ ...props }: Readonly<AuthSignUpFormProps>) {
  const [formState, formAction] = useFormState(signup, {
    success: false,
    errors: {},
  });

  return (
    <form action={formAction} {...props}>
      <BaseFormField error={formState?.errors?.email?.[0]}>
        <BaseLabel htmlFor="email">Email</BaseLabel>
        <BaseInput id="email" name="email" type="email" />
      </BaseFormField>

      <BaseFormField error={formState?.errors?.password?.[0]}>
        <BaseLabel htmlFor="password">Password</BaseLabel>
        <BaseInput id="password" name="password" type="password" />
      </BaseFormField>

      <BaseFormField error={formState?.errors?.confirmPassword?.[0]}>
        <BaseLabel htmlFor="confirm-password">Confirm password</BaseLabel>
        <BaseInput id="confirm-password" name="confirmPassword" type="password" />
      </BaseFormField>

      <SubmitButton>Sign up</SubmitButton>
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
