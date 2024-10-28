import { logout } from "@/actions/auth";

import { BaseButton } from "@/components/Base/Button";

function Page() {
  return (
    <>
      <section className="py-24 sm:py-32 md:py-40 container">
        <h1 className="text-5xl leading-tight text-center font-semibold">Web</h1>
        <form action={logout}>
          <BaseButton>Sign out</BaseButton>
        </form>
      </section>
    </>
  );
}

export default Page;
