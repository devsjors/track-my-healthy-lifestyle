import { WithFooter } from "@/components/WithFooter";
import { WithNavBar } from "@/components/WithNavBar";
import { PropsWithChildren } from "react";

type DefaultLayoutProps = PropsWithChildren & {};

export function DefaultLayout({ children }: Readonly<DefaultLayoutProps>) {
  return (
    <>
      <WithNavBar />
      <main>{children}</main>
      <WithFooter />
    </>
  );
}
