import Logo from "@/assets/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";

type MarketingLayoutProps = {
  children: React.ReactNode;
};

function MarketingLayout({ children }: Readonly<MarketingLayoutProps>) {
  return (
    <>
      <header className="bg-slate-100/75 px-5 py-4 backdrop-blur mx-auto sticky top-5 z-50 rounded-full w-fit">
        <nav className="flex items-center gap-12">
          <Link href="/">
            <Image src={Logo} alt="Logo" height={28} />
          </Link>

          <ul className="flex">
            <li>
              <Link href="#features" className="px-4 py-2">
                Features
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="px-4 py-2">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#book-a-demo" className="px-4 py-2">
                Book a demo
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="p-5 container">
        <p className="text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Company • Alle rechten voorbehouden
        </p>
      </footer>
    </>
  );
}

export default MarketingLayout;
