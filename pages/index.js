import BlogItem from '../components/BlogItem';

export default function IndexPage() {
  return (
    <>
      {/* Begin hero section */}
      <div className="flex flex-col items-center justify-center bg-home-1 bg-no-repeat bg-cover px-6 py-10 md:py-40">
        <div className="flex flex-col items-center justify-center container text-white max-w-xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center">
            Building the future of DeFi
          </h3>
          <h5 className="text-xl italic font-medium mt-4">
            Our New Venue linking Capital to Investment Projects
          </h5>
          <p className="text-center text-base text-white mt-4 md:mt-10">
            At Tokenizer, we’re harnessing the power of blockchain to design and
            build an end-to-end decentralized finance and banking ecosystem. We
            aim to innovative, build efficiencies and advance capital creation
            by bridging a large number of investors with diversified
            high-quality investment opportunities via tokenized listings and a
            robust marketplace
          </p>
          <a
            href="/contactus"
            className="btn-primary font-medium text-white text-xl mt-4 md:mt-12 w-full md:w-auto"
          >
            Request Demo
          </a>
        </div>
      </div>

      {/* Begin new section; Instant settlements. Built-in Compliance. */}
      <div className="flex flex-col items-center justify-center bg-white bg-no-repeat bg-cover px-6 py-10 md:py-36">
        <div className="flex flex-col items-center justify-center container text-white max-w-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-primary text-center">
            Instant settlements. <br /> Built-in Compliance.
          </h3>
          <p className="text-center text-base mt-6 md:mt-12 text-secondary">
            Our secure regulatory-compliant infrastructure is built to offer
            seamless issuance, trading, and distribution services for high
            quality asset-backed digital securities. <br /> <br />A dedicated
            team of capital market veterans and blockchain experts alongside our
            global network of vetted industry alliances allow us to empower our
            clients with the most efficient and scalable solutions for both
            retail and institutional offerings.
          </p>
          <a
            href="/about"
            className="btn-primary font-medium text-white text-xl w-full md:w-auto mt-6 md:mt-12"
          >
            Learn more About Us
          </a>
        </div>
      </div>

      {/* Begin new section; Why Tokenize? */}
      <div className="flex flex-col items-center justify-center bg-home-2 bg-no-repeat bg-cover px-6 py-10 md:py-20">
        <div className="flex flex-col items-center justify-center text-white py-160 max-w-xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center">
            Why Tokenize?
          </h3>
          <p className="text-center text-base mt-4 md:mt-8">
            Our proprietary suite of services automates every step from issuance
            and fundraising to investor management and annual audits. We take
            pride in framing simple, self-serviced solutions to address complex,
            composite problems.
          </p>
          <a
            href="/solutions"
            className="btn-primary font-medium text-white text-xl w-full md:w-auto mt-4 md:mt-8"
          >
            Access our Solutions
          </a>
        </div>
      </div>

      {/* Begin new section; Media Coverage */}
      <div className="flex flex-col items-center justify-center space-y-12 bg-white px-6 py-10 md:py-px124">
        <div className="flex flex-col items-center justify-center lg:container text-white">
          <h3 className="text-3xl md:text-4xl font-bold text-primary text-center">
            Media Coverage
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 justify-center items-center mt-4 md:mt-8">
            <div className="flex items-center justify-center text-center">
              <img alt="COINTELEGRAPH" src="/images/m1.png" />
            </div>
            <div className="flex items-center justify-center">
              <img alt="Cypto News Point" src="/images/m2.png" />
            </div>
            <div className="flex items-center justify-center">
              <img alt="Business Blockchain HQ" src="/images/m3.png" />
            </div>
            <div className="flex items-center justify-center">
              <img alt="Daily Alts" src="/images/m4.png" />
            </div>

            <div className="flex items-center justify-center">
              <img alt="Europe World News" src="/images/m5.png" />
            </div>
            <div className="flex items-center justify-center">
              <img alt="The American Reporter" src="/images/m6.png" />
            </div>
            <div className="flex items-center justify-center">
              <img alt="The Crypto Breaking News" src="/images/m7.png" />
            </div>
            <div className="flex items-center justify-center">
              <img alt="Coss Exchange" src="/images/m8.png" />
            </div>
          </div>
        </div>
      </div>

      {/* Begin new section; Industry Recognition */}
      <div className="flex flex-col items-center justify-center bg-secondary px-6 py-10 md:py-20">
        <div className="flex flex-col items-center justify-center text-secondary container px-0 md:px-20">
          <h3 className="text-3xl md:text-4xl font-bold text-primary text-center">
            Industry Recognition
          </h3>
          <p className="text-center text-base italic mt-4 md:mt-8">
            “...blockchain technology is taking hold very quickly in the
            institutional investment community (PayPal, Goldman Sachs, JP
            Morgan, Ant Group), and will bring significant value to our clients
            through its ability to enhance transparency, liquidity,
            accessibility, and security in real estate investments.
          </p>
          <p className="text-center text-base mt-4 md:mt-8">
            - Andy Strott, Resolute U.S. Real Estate Fund I
          </p>
        </div>
      </div>
      {/* Begin new section; Latest on Tokenizer */}
      <div className="flex flex-col items-center justify-center bg-white py-10 md:py-32 px-6">
        <div className="flex flex-col items-center justify-center text-secondary container">
          <h3 className="text-3xl md:text-4xl font-bold text-primary text-center">
            Latest on Tokenizer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-20 mt-6 md:mt-12">
            <BlogItem
              key="1"
              imageUrl="/images/b1.png"
              title="TomoChain is Now Listed on Tokenizer DEX."
              blogLink="https://tokenizer.cc"
            />
            <BlogItem
              key="2"
              imageUrl="/images/b2.png"
              title="Are Asset-Backed Tokens the Blockchain Application of the Future?"
              blogLink="https://tokenizer.cc"
            />
            <BlogItem
              key="3"
              imageUrl="/images/b3.png"
              title="TomoChain is Now Listed on Tokenizer DEX."
              blogLink="https://tokenizer.cc"
            />
          </div>
          <a
            href="/blog"
            className="btn-primary font-medium text-xl mt-6 md:mt-12 w-full md:w-80"
          >
            Discover More
          </a>
        </div>
      </div>
      {/* Begin new section; Request our Whitepaper */}
      <div className="flex flex-col items-center justify-center bg-home-3 bg-no-repeat bg-cover py-10 md:py-20 px-6">
        <div className="flex flex-col items-center justify-center lg:container text-white py-160 lg:max-w-914">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center">
            Request our Whitepaper
          </h3>
          <p className="text-center text-base text-white mt-4 md:mt-6">
            Learn more about what we do and how we do it
          </p>
          <div className="container w-full lg:w-8/12 text-center mt-4 md:mt-12">
            <form className="container w-full">
              <input
                className="rounded-full text-base text-secondary py-4 px-8 w-full"
                placeholder="Name Lastname"
              />
              <input
                className="rounded-full text-base text-secondary py-4 px-8 w-full mt-6"
                placeholder="Enter your email"
              />
              <button
                className="btn-secondary text-xl mt-4 md:mt-10 w-full md:w-80 px-8"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
