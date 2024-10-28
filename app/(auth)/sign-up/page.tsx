import { AuthSignUpForm } from "@/components/Auth/SignUpForm";
import Link from "next/link";

function Page() {
  return (
    <>
      <Link href="/">Logo</Link>

      <div className="mt-6 w-full max-w-md space-y-4">
        <AuthSignUpForm className="space-y-4" />
      </div>

      <p className="text-sm text-center mt-6">
        Already have an account?{" "}
        <Link href="/login" className="underline underline-offset-4">
          Sign in
        </Link>
      </p>
    </>
  );
}

export default Page;
