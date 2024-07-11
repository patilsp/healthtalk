import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-dark-400 py-4 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-center text-sm md:text-left">
            © {new Date().getFullYear()} Health Talk. All rights reserved.
          </p>
          <div className="mt-2 flex space-x-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
