import { PropsWithChildren } from "react";

type BaseLayoutProps = PropsWithChildren & {};

export function BaseLayout({ children }: Readonly<BaseLayoutProps>) {
  return <div className="grid size-full grid-cols-[1fr] grid-rows-[auto_1fr_auto]">{children}</div>;
}
