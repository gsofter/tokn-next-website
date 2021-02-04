import Link from 'next/link';
import {
  FaInstagram,
  FaFacebook,
  FaTelegramPlane,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

import { AiFillTwitterCircle } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className="flex flex-col">
      <section className="w-full flex items-center justify-center bg-secondary py-5 md:py-16 px-6">
        <div className="flex flex-col md:flex-row items-center justify-center container">
          <div className="w-full md:w-5/12 md:-my-16">
            <img
              src={`${__dirname}images/footer_logo.png`}
              width="400px"
              height="400px"
            />
          </div>
          <div className="w-full md:w-7/12 ">
            <div className="w-full grid grid-flow-row sm:grid-flow-col grid-rows-5 gap-x-4 gap-y-2">
              {/* <div className="flex flex-col justify-start"> */}
              <p className="font-bold text-base text-secondary"> Company </p>
              <a href="/" className="text-secondary text-base">
                About Us
              </a>
              <a href="/" className="text-secondary text-base">
                Home
              </a>
              <a href="/" className="text-secondary text-base">
                Careers
              </a>
              <a href="/" className="text-secondary text-base">
                Contact Us
              </a>
              {/* </div>
              <div className="flex flex-col justify-start"> */}
              <p className="font-bold text-base text-secondary">Solutions </p>
              <a href="/" className="text-secondary text-base">
                Issuer
              </a>
              <a href="/" className="text-secondary text-base">
                Launchpad
              </a>
              <a href="/" className="text-secondary text-base">
                Exchange
              </a>
              <a href="/" className="text-secondary text-base">
                Defi Hub
              </a>
              {/* </div>
              <div className="flex flex-col justify-start"> */}
              <p className="font-bold text-base text-secondary">Information</p>
              <a href="/" className="text-secondary text-base">
                FAQ
              </a>
              <a href="/" className="text-secondary text-base">
                Terms
              </a>
              <a href="/" className="text-secondary text-base">
                Privacy
              </a>
              <a href="/" className="text-secondary text-base">
                Resources
              </a>
              {/* </div> */}
            </div>
            <div className="flex flex-col md:flex-col w-full container mt-12 ">
              <label className="text-primary text-base">
                Subscribe to our newsletter.
              </label>
              <div className="flex flex-col md:flex-row w-full mt-4">
                <input
                  className="rounded-full bg-white border border-primary text-base border-solid px-8 py-2 w-full md:w-1/4"
                  placeholder="Name"
                />
                <input
                  className="rounded-full bg-white border border-primary text-base border-solid px-8 py-2 mt-4 md:mt-0 ml-0 md:ml-4 w-full md:w-1/2"
                  placeholder="Email"
                />
                <button
                  className="btn-primary text-base py-2 shadow-none h-full ml-0 mt-4 md:mt-0 md:ml-4 w-full md:w-1/4"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center bg-footer px-6 py-10 md:py-20">
        <div className="container text-white">
          <div className="w-full flex flex-col md:flex-row justify-between ">
            <p> (C) 2021 Defi Ventures Inc. </p>
            <div className="grid grid-cols-5 gap-x-4 mt-4 md:mt-0">
              <button className="bg-white text-footer rounded-full p-2">
                <FaInstagram className="text-2xl" />
              </button>
              <button className="bg-white text-footer rounded-full p-2">
                <FaFacebook className="text-2xl" />
              </button>
              <button className="bg-white text-footer rounded-full p-2">
                <FaTelegramPlane className="text-2xl" />
              </button>
              <button className="bg-white text-footer rounded-full p-2">
                <FaTwitter className="text-2xl" />
              </button>
              <button className="bg-white text-footer rounded-full p-2">
                <FaLinkedinIn className="text-2xl" />
              </button>
            </div>
          </div>
          <hr className="mt-10" />
          <div className="w-full flex flex-col items-start justify-center mt-10">
            <p> Read about our Privacy Policy </p>
            <p className="mt-4">
              Disclaimer and Additional Disclosures This website is owned and
              operated by www.Tokenizer.Cc (“tokenizer”), a technology company
              providing technology and blockchain-based services for issuers of
              securities or other digital assets. Tokenizer is not a
              broker-dealer, investment adviser, or financial advisor. Tokenizer
              is not registered with the u.S. Securities & exchange commission
              (sec) nor any other regulatory agency or body in the united states
              or internationally. Tokenizer does not give investment or legal
              advice, endorsements, analysis, or recommendations with respect to
              any securities or other digital assets. Nothing on this website
              shall constitute or be construed as an offering of securities or
              as investment advice or investment recommendations by tokenizer or
              any of its affiliates or a recommendation as to an investment. All
              third party securities offerings and digital assets powered by
              tokenizer’s technology are offered by, and all information related
              thereto is the responsibility of, the applicable issuer of such
              securities or digital assets. Tokenizer does not custody any
              digital securities or digital assets on behalf of any of its
              customers or users of our website services.
            </p>
            <a className="mt-6" href="/privacypolicy">
              READ MORE
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
