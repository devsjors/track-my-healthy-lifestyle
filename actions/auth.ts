"use server";

import { getSupabaseClient } from "@/lib/supabase/server";
import { signupSchema } from "@/schemas/auth/signup";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const supabase = getSupabaseClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (error) {
    return redirect(`/login?error=${error.message}`);
  }

  return redirect("/app");
}

export async function signup(_: unknown, formData: FormData) {
  const supabase = getSupabaseClient();

  const validatedFields = signupSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    return {
      success: validatedFields.success,
      errors: {
        ...validatedFields.error.flatten().fieldErrors,
      },
    };
  }

  const { error } = await supabase.auth.signUp({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (error) {
    redirect(`/sign-up?error=${error.message}`);
  }

  redirect("/app");
}

export async function logout() {
  const supabase = getSupabaseClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
  }

  redirect("/login");
}
