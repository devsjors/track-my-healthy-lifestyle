import { PropsWithChildren } from "react";

type AuthLayoutProps = PropsWithChildren & {};

export function AuthLayout({ children }: Readonly<AuthLayoutProps>) {
  return (
    <main className="flex w-full items-center justify-center row-span-full px-4 py-14 md:px-14 lg:px-28">
      <div className="flex flex-col items-center justify-center w-full">{children}</div>
    </main>
  );
}
