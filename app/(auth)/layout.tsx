import { AuthLayout } from "@/layouts/Auth";
import { PropsWithChildren } from "react";

type AuthLayoutGroupProps = PropsWithChildren & {};

function AuthLayoutGroup({ children }: Readonly<AuthLayoutGroupProps>) {
  return <AuthLayout>{children}</AuthLayout>;
}

export default AuthLayoutGroup;
