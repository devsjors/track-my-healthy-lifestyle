import { AuthSignInForm } from "@/components/Auth/SignInForm";
import { BaseAlert } from "@/components/Base/Alert";
import Link from "next/link";

type PageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

function Page({ searchParams }: Readonly<PageProps>) {
  const error = Array.isArray(searchParams.error) ? searchParams.error[0] : searchParams.error;

  return (
    <>
      <Link href="/">Logo</Link>

      <div className="mt-6 w-full max-w-md space-y-4">
        {error && <BaseAlert title={error} color="red" variant="subtle" />}
        <AuthSignInForm className="space-y-4" />
      </div>

      <p className="text-sm text-center mt-6">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="underline underline-offset-4">
          Sign up
        </Link>
      </p>
    </>
  );
}

export default Page;
