import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/logo.png'


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1c1f25] bg-[#0a0c10]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row lg:px-8">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              width={22}
              height={22}
              alt="Fitlog logo"
              className="object-contain"
            />

            <span className="text-[18px] font-bold tracking-wide text-[#f2f3f5]">
              FITLOG
            </span>
          </Link>
        </div>

        <p className="text-center text-xs text-[#7d828b] sm:text-right">
          &copy; {year} FitLog &mdash; Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;