import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col">
      <section className="w-full flex items-center justify-center bg-secondary py-20">
        <div className="flex flex-row items-center justify-center container">
          <div className="md:w-5/12">
            <img src="./images/footer_logo.png" />
          </div>
          <div className="md:w-7/12 ">
            <div className="w-full grid grid-cols-3 gap-x-4 gap-y-8">
              <a href="/" className="text-secondary text-xl">
                Home
              </a>
              <a href="/" className="text-secondary text-xl">
                About Us
              </a>
              <a href="/" className="text-secondary text-xl">
                Resources
              </a>
              <a href="/" className="text-secondary text-xl">
                Contact Us
              </a>
              <a href="/" className="text-secondary text-xl">
                Client Hub
              </a>
              <a href="/" className="text-secondary text-xl">
                Exchange
              </a>
              <a href="/" className="text-secondary text-xl">
                Launchpad
              </a>
              <a href="/" className="text-secondary text-xl">
                Issuer
              </a>
              <a href="/" className="text-secondary text-xl">
                FAQ
              </a>
              <a href="/" className="text-secondary text-xl">
                Careers
              </a>
              <a href="/" className="text-secondary text-xl">
                Privacy Policy
              </a>
              <a href="/" className="text-secondary text-xl">
                Terms of Use
              </a>
            </div>
            <div className="w-full container mt-12 flex flex-row">
              <div className="w-8/12 flex flex-col items-start justify-center">
                <label className="text-primary text-xl">
                  Subscribe to our newsletter.
                </label>
                <input
                  className="rounded-full bg-white border border-primary text-xl border-solid px-8 py-2 mt-4 w-full"
                  placeholder="Enter your Name here"
                />
                <input
                  className="rounded-full bg-white border border-primary text-xl border-solid px-8 py-2 mt-4 w-full"
                  placeholder="Enter your Name here"
                />
              </div>
              <div className="w-4/12 flex flex-col items-start justify-end px-4">
                <button className="btn-primary w-full text-xl" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center bg-footer py-20">
        <div className="container text-white">
          <div className="w-full flex flex-col justify-between ">
            <p> (C) 2021 Defi Ventures Inc. </p>
            <div className=""></div>
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
            <a className="mt-6" href="/">
              {' '}
              READ MORE{' '}
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
