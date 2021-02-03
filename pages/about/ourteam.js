import BlogItem from '../../components/BlogItem';
export default function OurTeamPage() {
  return (
    <>
      {/* Begin hero section */}
      <div className="flex flex-col items-center justify-center bg-ourteam-1 bg-no-repeat bg-cover px-6 py-10 md:py-40">
        <div className="flex flex-col items-center justify-center container text-white container lg:max-w-4xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center">
            Our Story
          </h3>
          <h5 className="text-xl italic font-medium mt-4">
            Building the bridge to tomorrow.
          </h5>
          <p className="text-center text-base text-white mt-4 md:mt-10">
            With mainstream adoption of blockchain technology, tokenized digital
            assets are swiftly gaining central positions in investor portfolios
            across the globe. To meet an urgent need for institutional-grade,
            regulatory-compliant infrastructure, Tokenizer was created with the
            vision to architect an exemplary trading and listing platform for
            all blockchain-powered digital assets. <br /> <br /> Our
            technology-driven ecosystem creates and lists asset-backed tokens,
            and introduces high-quality digital securities to capital and crypto
            markets. A sustained focus on automation, transparency, and
            efficiency alongside a global network of industry partners ensures
            success for our clients and community alike.
          </p>
          {/* <button className="btn-primary font-medium text-white text-xl mt-4 md:mt-12 w-full md:w-auto">
            Request Demo
          </button> */}
        </div>
      </div>

      {/* Begin Meet Our team */}
      <div className="flex flex-col items-center justify-center bg-white px-6 py-10 md:py-40">
        <div className="flex flex-col items-center justify-center container lg:max-w-4xl">
          <div className="flex flex-col items-center justify-center rounded-xl md:rounded-card border border-solid border-primary px-8 py-12 shadow-card bg-secondary">
            <h3 className="text-primary text-3xl md:text-4xl font-bold">
              Our Team
            </h3>
            <p className="text-center text-base mt-4 md:mt-10">
              Anchored in the ethos of decentralization, our team is comprised
              of diverse, seasoned industry professionals from around the world.
              Combining product and market expertise across traditional and
              alternative assets, investment banking, capital markets, and
              blockchain technology, we’re united by a collective aspiration to
              breathe fresh energy into legacy ecosystems.
            </p>
            <a
              href="/about/members"
              className="btn-primary font-medium text-white text-xl mt-4 md:mt-12 w-full md:w-auto"
            >
              Meet the Team
            </a>
          </div>
        </div>
      </div>
      {/* Begin new section; Latest Listings */}
      <div
        className="flex flex-col items-center justify-center bg-white py-10 md:py-20"
        id="latest-listing"
      >
        <div className="flex flex-col items-center justify-center text-secondary container">
          <h3 className="text-3xl md:text-4xl font-bold text-primary text-center">
            Latest Listings
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
            href="/"
            className="btn-primary font-medium text-xl mt-6 md:mt-12 w-full md:w-80"
          >
            Discover More
          </a>
        </div>
      </div>

      {/* Begin new section; Service and Business Partners */}
      <div className="flex flex-col items-center justify-center bg-white py-10 md:py-20">
        <div className="flex flex-col items-center justify-center text-secondary container">
          <h3 className="text-3xl md:text-4xl font-bold text-primary text-center">
            Service and Business Partners
          </h3>
          <div className="flex flex-col items-center justify-center mt-8">
            <img src={`${__dirname}images/service1.png`}></img>
          </div>
          <a
            href="/about/ournetwork"
            className="btn-primary font-medium text-xl mt-6 md:mt-12 w-full md:w-80"
          >
            Discover More
          </a>
        </div>
      </div>
    </>
  );
}
