import Link from 'next/link';
import { useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';

// https://tailwindui.com/components/marketing/elements/headers

const routes = [
  {
    title: 'About Us',
    route: '/about',
    sub: [
      {
        title: 'Our Team',
        route: '/about/members',
      },
      {
        title: 'Latest Listing',
        route: '/about/members',
      },
      {
        title: 'Service & Business Partnerships',
        route: '/about/members',
      },
      {
        title: 'Liquidity Partners',
        route: '/about/members',
      },
      {
        title: 'Industry Recognitions',
        route: '/about/members',
      },
    ],
  },
  {
    title: 'Solutions',
    route: '/solutions',
    sub: [
      {
        title: 'Issuer',
        route: '/solutions/issuer',
      },
      {
        title: 'Launchpad',
        route: '#',
      },
      {
        title: 'DEX',
        route: '#',
      },
    ],
  },
  {
    title: 'Resources',
    route: '/resources',
    sub: [
      {
        title: 'Industry Briefings',
        route: '/resources/ind_briefings',
      },
      {
        title: 'Latest Insights',
        route: '/resources/latest_insights',
      },
      {
        title: 'FAQ',
        route: '/resources/faq',
      },
    ],
  },
  { title: 'Contact Us', route: '/contactus' },
  {
    title: 'Client Hub',
    route: 'https://hub.tokenizer.cc',
    className: 'btn-primary text-white',
    blank: true,
  },
];

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="bg-secondary">
      <Transition
        show={mobileMenuIsOpen}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src={`${__dirname}images/logo.png`}
                    alt="Tokenizer"
                    style={{ width: '30px', height: 'auto' }}
                  />
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      onClick={() => setMobileMenuIsOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      {/**  Heroicon name: x **/}
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Automations
                      </span>
                    </a>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    About Us
                  </a>

                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Solutions
                  </a>

                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Resources
                  </a>

                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Contact Us
                  </a>
                </div>
                <div>
                  <a className="btn-primary text-white font-medium hover:text-gray-900">
                    Client Hub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
      <div className="flex flex-wrap items-center justify-between max-w-full px-4 py-6 mx-auto md:flex-no-wrap md:px-6">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="Tokenizer logo"
              className="w-3/4"
            />
          </Link>
        </div>

        <button
          className="flex items-center px-3 py-2 text-white border border-white rounded md:hidden"
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
            'md:flex flex-col md:flex-row md:items-center md:justify-center w-full md:w-auto',
            mobileMenuIsOpen ? `block` : `hidden`,
          )}
        >
          {routes.map(({ route, title, className, blank, sub }) => (
            <li className="mt-3 md:mt-0 md:ml-6 lg:px-5 md:px-2" key={title}>
              {sub === undefined ? (
                <Link href={route}>
                  <a
                    className={cn(
                      'block font-medium hover:text-gray-900',
                      {
                        [`${className} text-white`]: className !== undefined,
                      },
                      { 'text-secondary': className === undefined },
                    )}
                    target={blank ? '_blank' : ''}
                  >
                    {title}
                  </a>
                </Link>
              ) : (
                <nav className="hidden md:flex space-x-10">
                  <div className="relative">
                    <Menu>
                      {({ open }) => (
                        <>
                          <Menu.Button as="div">
                            <a
                              href="#"
                              className="block font-medium text-secondary hover:text-gray-900"
                              target={blank ? '_blank' : ''}
                            >
                              {title}
                            </a>
                          </Menu.Button>
                          <Transition
                            show={open}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <div className="absolute z-10 mt-3 transform px-2 w-screen max-w-max sm:px-0 lg:ml-0">
                              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-6 bg-menu px-5 py-6 sm:gap-8 sm:p-8">
                                  {sub.map((item) => (
                                    <>
                                      <a
                                        href={item.route}
                                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer"
                                      >
                                        <div className="ml-4">
                                          <p className="text-base font-medium text-gray-900 hover:text-gray-900">
                                            {item.title}
                                          </p>
                                        </div>
                                      </a>
                                      <hr className="border-secondary" />
                                    </>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  </div>
                </nav>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
