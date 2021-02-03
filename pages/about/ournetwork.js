const partners = [
  {
    logo: `${__dirname}images/partners/p1.png`,
    name: 'UNISWAP',
  },
  {
    logo: `${__dirname}images/partners/p2.png`,
    name: 'BALANCER',
  },
  {
    logo: `${__dirname}images/partners/p3.png`,
    name: 'KYBER',
  },
  {
    logo: `${__dirname}images/partners/p4.png`,
    name: 'CURVE',
  },
  {
    logo: `${__dirname}images/partners/p4.png`,
    name: 'BANCOR',
  },
  {
    logo: `${__dirname}images/partners/p5.png`,
    name: 'MOONISWAP',
  },
  {
    logo: `${__dirname}images/partners/p6.png`,
    name: 'MSTABLE',
  },
  {
    logo: `${__dirname}images/partners/p7.png`,
    name: 'SHELL',
  },
  {
    logo: `${__dirname}images/partners/p8.png`,
    name: 'OXMEASH',
  },
  {
    logo: `${__dirname}images/partners/p9.png`,
    name: 'OASIS',
  },
];
export default function OurNetworkPage() {
  return (
    <>
      <div className="section-1">
        <div className="w-full container">
          <h3 className="section-title border-b-4 border-secondary pb-8">
            Service and Business Partnerships
          </h3>
          <div>
            <div className="flex flex-col items-center justify-center mt-8">
              <img src={`${__dirname}images/service1.png`}></img>
            </div>
          </div>
        </div>

        <div className="w-full container" id="liquidity-partners">
          <h3 className="section-title border-b-4 border-secondary pb-8">
            Liquidity Partners
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-20 py-12">
            {partners.map((p, index) => (
              <div
                className="flex flex-col justify-center items-center"
                key={index}
              >
                <div className="partner-card">
                  <img src={p.logo} />
                  <p className="text-xl items-center text-primary font-medium mt-4">
                    {p.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Begin new section; Industry Recognition */}
      <div
        className="flex flex-col items-center justify-center bg-secondary px-6 py-10 md:py-20"
        id="industry"
      >
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

      {/* Begin Join Us Section */}
      <div className="flex flex-col items-center justify-center bg-home-3 bg-no-repeat bg-cover py-10 md:py-20 px-6">
        <div className="flex flex-col items-center justify-center lg:container text-white">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center">
            Partner with us
          </h3>
          <a
            href="#"
            className="btn-secondary font-medium text-xl w-full md:w-auto mt-4 md:mt-16"
          >
            Click Here
          </a>
        </div>
      </div>
    </>
  );
}
