import { DefaultLayout } from "@/layouts/Default";
import { PropsWithChildren } from "react";

type MarketingLayoutProps = PropsWithChildren & {};

function MarketingLayout({ children }: Readonly<MarketingLayoutProps>) {
  return <DefaultLayout>{children}</DefaultLayout>;
}

export default MarketingLayout;
