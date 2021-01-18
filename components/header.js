import Link from 'next/link';
import { useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';

const routes = [
  { title: 'Home', route: '/' },
  { title: 'About Us', route: '/about' },
  { title: 'Solutions', route: '/solutions' },
  { title: 'Resources', route: '/Resources' },
  { title: 'Contact Us', route: '/contactus' },
  {
    title: 'Client Hub',
    route: 'https://hub.tokenizer.cc',
    className: 'btn-primary',
    blank: true,
  },
];

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="bg-secondary">
      <div className="flex flex-wrap items-center justify-between lg:container px-4 py-6 mx-auto md:flex-no-wrap md:px-6">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={40}
              height={40}
              priority
              alt="Tokenizer logo"
            />
          </Link>
        </div>

        <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul
          className={cn(
            'md:flex flex-col md:flex-row md:items-center md:justify-center text-gray-500 w-full md:w-auto',
            mobileMenuIsOpen ? `block` : `hidden`,
          )}
        >
          {routes.map(({ route, title, className, blank }) => (
            <li className="mt-3 md:mt-0 md:ml-6" key={title}>
              <Link href={route}>
                <a
                  className={cn('block text-secondary', {
                    [`${className}`]: className !== undefined,
                  })}
                  target={blank ? '_blank' : ''}
                >
                  {title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}