import Image from 'next/image';
import Link from 'next/link';
import BlogItem from '../components/BlogItem';

export default function IndexPage() {
  return (
    <>
      {/* Begin hero section */}
      <div className="flex flex-col items-center justify-center space-y-12 bg-home-1 bg-no-repeat bg-cover py-px160">
        <div className="flex flex-col items-center justify-center lg:container text-white py-160 lg:max-w-672">
          <h3 className="text-hxl font-bold mb-4">
            Building the future of DeFi
          </h3>
          <h5 className="text-hlg italic font-medium mb-8">
            Our New Venue linking Capital to Investment Projects
          </h5>
          <p className="text-center text-hmd mb-12">
            At Tokenizer, we’re harnessing the power of blockchain to design and
            build an end-to-end decentralized finance and banking ecosystem. We
            aim to innovative, build efficiencies and advance capital creation
            by bridging a large number of investors with diversified
            high-quality investment opportunities via tokenized listings and a
            robust marketplace
          </p>
          <button className="btn-primary font-medium text-white text-hlg">
            Request Demo
          </button>
        </div>
      </div>

      {/* Begin new section; Instant settlements */}
      <div className="flex flex-col items-center justify-center space-y-12 bg-white bg-no-repeat bg-cover py-px124">
        <div className="flex flex-col items-center justify-center lg:container text-white py-160 lg:max-w-914">
          <h3 className="text-hxl font-bold mb-12 text-primary">
            Instant settlements. Built-in Compliance.
          </h3>
          <p className="text-center text-hmd mb-12 text-secondary">
            Our secure regulatory-compliant infrastructure is built to offer
            seamless issuance, trading, and distribution services for high
            quality asset-backed digital securities. <br /> <br />A dedicated
            team of capital market veterans and blockchain experts alongside our
            global network of vetted industry alliances allow us to empower our
            clients with the most efficient and scalable solutions for both
            retail and institutional offerings.
          </p>
          <button className="btn-primary font-medium text-white text-hlg">
            Learn more About Us
          </button>
        </div>
      </div>

      {/* Begin new section; Why Tokenize? */}
      <div className="flex flex-col items-center justify-center space-y-12 bg-home-2 bg-no-repeat bg-cover py-px69">
        <div className="flex flex-col items-center justify-center lg:container text-white py-160 lg:max-w-914">
          <h3 className="text-hxl font-bold mb-8 text-white">Why Tokenize?</h3>
          <p className="text-center text-hmd mb-8">
            Our proprietary suite of services automates every step from issuance
            and fundraising to investor management and annual audits. We take
            pride in framing simple, self-serviced solutions to address complex,
            composite problems.
          </p>
          <button className="btn-primary font-medium text-white text-hlg">
            Access our Solutions
          </button>
        </div>
      </div>

      {/* Begin new section; Media Coverage */}
      <div className="flex flex-col items-center justify-center space-y-12 bg-white py-px124">
        <div className="flex flex-col items-center justify-center lg:container text-white py-160 lg:container">
          <h3 className="text-hxl font-bold mb-8 text-primary">
            Media Coverage
          </h3>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-8">
            <div className="relative">
              <Image
                alt="COINTELEGRAPH"
                src="/images/m1.png"
                layout="fill"
                objectFit="scale-down"
              />
            </div>

            <div className="relative">
              <Image
                alt="Cypto News Point"
                src="/images/m2.png"
                layout="fill"
                objectFit="scale-down"
              />
            </div>
            <div className="relative">
              <Image
                alt="Business Blockchain HQ"
                src="/images/m3.png"
                layout="fill"
                objectFit="scale-down"
              />
            </div>
            <div className="relative">
              <Image
                alt="Daily Alts"
                src="/images/m4.png"
                width="240px"
                height="85px"
              />
            </div>

            <div className="relative">
              <Image
                alt="Europe World News"
                src="/images/m5.png"
                layout="fill"
                objectFit="scale-down"
              />
            </div>
            <div className="relative">
              <Image
                alt="The American Reporter"
                src="/images/m6.png"
                layout="fill"
                objectFit="scale-down"
              />
            </div>
            <div className="relative">
              <Image
                alt="The Crypto Breaking News"
                src="/images/m7.png"
                layout="fill"
                objectFit="scale-down"
              />
            </div>
            <div className="relative">
              <Image
                alt="Coss Exchange"
                src="/images/m8.png"
                width="354px"
                height="177px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Begin new section; Industry Recognition */}
      <div className="flex flex-col items-center justify-center space-y-12 bg-secondary py-px69">
        <div className="flex flex-col items-center justify-center text-secondary py-160 lg:max-w-914 sm:container">
          <h3 className="text-hxl font-bold mb-8 text-primary">
            Industry Recognition
          </h3>
          <p className="text-center text-hmd italic mb-8">
            “...blockchain technology is taking hold very quickly in the
            institutional investment community (PayPal, Goldman Sachs, JP
            Morgan, Ant Group), and will bring significant value to our clients
            through its ability to enhance transparency, liquidity,
            accessibility, and security in real estate investments.
          </p>
          <p className="text-center text-hmd">
            - Andy Strott, Resolute U.S. Real Estate Fund I
          </p>
        </div>
      </div>
      {/* Begin new section; Latest on Tokenizer */}
      <div className="flex flex-col items-center justify-center space-y-12 bg-white py-32">
        <div className="flex flex-col items-center justify-center text-secondary py-160 lg:max-w-914 sm:container">
          <h3 className="text-hxl font-bold mb-12 text-primary">
            Latest on Tokenizer
          </h3>
          <p className="text-center text-hmd italic mb-8">
            “...blockchain technology is taking hold very quickly in the
            institutional investment community (PayPal, Goldman Sachs, JP
            Morgan, Ant Group), and will bring significant value to our clients
            through its ability to enhance transparency, liquidity,
            accessibility, and security in real estate investments.
          </p>
          <p className="text-center text-hmd">
            - Andy Strott, Resolute U.S. Real Estate Fund I
          </p>
        </div>
      </div>
    </>
  );
}
