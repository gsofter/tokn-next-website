import LeaderMember from '../../components/LeaderMember';
import TeamMember from '../../components/TeamMember';
const leaders = [
  {
    photoSrc: `${__dirname}images/members/leaders/manindra_ma_jumar.png`,
    firstName: 'manindra',
    lastName: 'majumdar',
    role: 'Chief Executive <br /> Officer',
    description:
      'As an experienced entrepreneur with a penchant for new technology, Manindra has worked in international business for over 7 years in 15+ countries. Experienced in AI, AR & Blockchain, he has launched several products in his entrepreneurial and professional career and continues to inspire and innovate as Founder & CEO at Tokenizer. He holds an MBA from the Hult International Business School (San Francisco, USA) Bachelor’s in Business Administration from the Edinburgh Napier University (Scotland, UK).',
  },
  {
    photoSrc: `${__dirname}images/members/leaders/max_atanassove.png`,
    firstName: 'max',
    lastName: 'atanassov',
    role: 'Chief Finance <br /> Officer',
    description:
      'Max is a financial services professional and brings over twenty years of industry experience to Tokenizer, of which more than 15 were earned in project finance, private equity and venture capital at the European Bank in London. He has created and managed companies in Europe, Asia and the US, including as the first CEO of a nanotechnology business that has now become a unicorn. He joined the blockchain revolution in 2017 as Head of Global Financial Infrastructure of a high profile blockchain project focused on supply chain, and more recently co-founded and a number of fintech and blockchain projects in the fields of digital banking and data-driven investments.',
  },
  {
    photoSrc: `${__dirname}images/members/leaders/mark_kuper.png`,
    firstName: 'marc',
    lastName: 'kuper',
    role: 'Chief Operation <br /> Officer',
    description:
      'Prior to leading Operations at Tokenizer, Mark served as COO and CCO at Higher Moment Capital LP, a Quantitative Hedge Fund in Boston MA. In ‘02 he co-founded Telluride Asset Management LLC, and led the fund management company as COO and CCO of the firm. Prior to Telluride, at Knight Capital Group he served as Senior-Vice President and Head of Corporate Strategy and New Business Initiatives of the $8b market cap public company. Mark started his career as a market maker and trader and brings with him over 30 years of leadership experience across operations, compliance, marketing and business development.',
  },
  {
    photoSrc: `${__dirname}images/members/leaders/fernando_gamonal.png`,
    firstName: 'fernando',
    lastName: 'gamonal',
    role: 'Chief Business <br /> Officer',
    description:
      'With over 20 years of experience, Fernando started his career as a financial analyst with Hewlett Packard in Germany, moving to American Express as Finance Head for Central & Eastern Europe and eventually becoming CEO Switzerland(a.i. CEO Germany). He has since developed his career on the start-up world, having co-founded companies in E-commerce and Fin-Tech and now applies his expertise to accelerate blockchain driven growth at Tokenizer',
  },
  {
    photoSrc: `${__dirname}images/members/leaders/stephan_ashworth.png`,
    firstName: 'stephan',
    lastName: 'ashworth',
    role: 'Chief Product <br /> Officer',
    description:
      'Stephen leads Tokenizer’s product development, bringing blockchain experience from Digital Fund Exchange, which he set up in 2018 as a new trading and clearing venue for mutual funds leveraging blockchain technology. Previously, Stephen set up Synrex (2014) to create a new B2B market to offer liquidity in derivative style hedging instruments for real estate values. He brings over 25 years experience in capital markets, across property, derivatives and hedge funds. Prior to founding Synrex, he has driven growth and innovation as Head of Investment Committee & Portfolio Manager of Iceberg Alternative Real Estate Fund (2006-13), founding partner of SunGard Reech (1999-06), Head of Equity Derivatives at First Chicago & Equity (1994-99), Equity Derivatives Trader at Citigroup (1992-94) and as ACA Accountant with KPMG (1988-92). He holds a BSc Hons in Mathematics from Southampton University.',
  },
  {
    photoSrc: `${__dirname}images/members/leaders/partha_mitra.png`,
    firstName: 'partha',
    lastName: 'mitra',
    role: 'Chief Technology <br /> Officer',
    description:
      'Partha leads Technology at Tokenizer and comes with over 15 years of experience spanning Asia, Europe and North America, with a focus on Investment Banking & Technology, at Wall Street firms such as BNY Mellon and Man Capital Market. He has helped build large scale Trading and Investment platforms managing multi-billion dollars institutional portfolios in Equity, Derivatives, ETF and Bitcoin Future Crypto desk. Partha started his career as software engineer and has held leadership positions at global asset management firms. He earned his Executive Fellowship at Massachusetts Institute of Technology, Master’s degree in Management and Systems from New York University, and Bachelor’s in Information Science & Engineering from Visvesvaraya Technological University.',
  },
  {
    photoSrc: `${__dirname}images/members/leaders/jemima_spiteri.png`,
    firstName: 'jemima',
    lastName: 'spiteri',
    role: 'Director of <br /> People & Culture',
    description:
      'Jemima serves as Director of People and Culture for Tokenizer, overseeing the startup’s global human resources operations. Jemima has extensive Human Resources experience, delivering improved capacity, growth, and transformation. Previously, Jemima held a variety of corporate senior Human Resources roles in the technology, logistics, manufacturing, and mining industries. She holds a Bachelor of Management with a double major in Marketing and Human Resource Management from Deakin University, and is presently pursuing further specializations.',
  },
];

const members = [
  {
    firstName: 'Abhi Jeet',
    lastName: 'Ba jhai',
    role: 'VP, Decentralized <br /> Exchange',
    photoSrc: `${__dirname}images/members/members/abhi_jeet_ba_jhai.png`,
  },
  {
    firstName: 'Abhi Jeet',
    lastName: 'Ba jhai',
    role: 'VP, Decentralized <br /> Exchange',
    photoSrc: `${__dirname}images/members/members/abhi_jeet_ba_jhai.png`,
  },
  {
    firstName: 'Abhi Jeet',
    lastName: 'Ba jhai',
    role: 'VP, Decentralized <br /> Exchange',
    photoSrc: `${__dirname}images/members/members/abhi_jeet_ba_jhai.png`,
  },
  {
    firstName: 'Abhi Jeet',
    lastName: 'Ba jhai',
    role: 'VP, Decentralized <br /> Exchange',
    photoSrc: `${__dirname}images/members/members/abhi_jeet_ba_jhai.png`,
  },
  {
    firstName: 'Abhi Jeet',
    lastName: 'Ba jhai',
    role: 'VP, Decentralized <br /> Exchange',
    photoSrc: `${__dirname}images/members/members/abhi_jeet_ba_jhai.png`,
  },
  {
    firstName: 'Abhi Jeet',
    lastName: 'Ba jhai',
    role: 'VP, Decentralized <br /> Exchange',
    photoSrc: `${__dirname}images/members/members/abhi_jeet_ba_jhai.png`,
  },
  {
    firstName: 'Abhi Jeet',
    lastName: 'Ba jhai',
    role: 'VP, Decentralized <br /> Exchange',
    photoSrc: `${__dirname}images/members/members/abhi_jeet_ba_jhai.png`,
  },
  {
    firstName: 'Abhi Jeet',
    lastName: 'Ba jhai',
    role: 'VP, Decentralized <br /> Exchange',
    photoSrc: `${__dirname}images/members/members/abhi_jeet_ba_jhai.png`,
  },
  {
    firstName: 'Abhi Jeet',
    lastName: 'Ba jhai',
    role: 'VP, Decentralized <br /> Exchange',
    photoSrc: `${__dirname}images/members/members/abhi_jeet_ba_jhai.png`,
  },
  {
    firstName: 'Abhi Jeet',
    lastName: 'Ba jhai',
    role: 'VP, Decentralized <br /> Exchange',
    photoSrc: `${__dirname}images/members/members/abhi_jeet_ba_jhai.png`,
  },
  {
    firstName: 'Abhi Jeet',
    lastName: 'Ba jhai',
    role: 'VP, Decentralized <br /> Exchange',
    photoSrc: `${__dirname}images/members/members/abhi_jeet_ba_jhai.png`,
  },
  {
    firstName: 'Abhi Jeet',
    lastName: 'Ba jhai',
    role: 'VP, Decentralized <br /> Exchange',
    photoSrc: `${__dirname}images/members/members/abhi_jeet_ba_jhai.png`,
  },
  {
    firstName: 'Abhi Jeet',
    lastName: 'Ba jhai',
    role: 'VP, Decentralized <br /> Exchange',
    photoSrc: `${__dirname}images/members/members/abhi_jeet_ba_jhai.png`,
  },
];

export default function MembersPage() {
  return (
    <>
      {/* Begin Members Sections */}
      <div className="flex flex-col justify-center items-center mt-12 mb-12">
        {/* Leaders Section */}
        <div className="flex flex-col justify-center bg-white container py-10">
          <h3 className="text-3xl md:text-4xl font-bold text-primary">
            Leadership
          </h3>
          <hr className="border-secondary border-t-4 my-8" />
          <div className="leaders grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-x-4 gap-y-4 md:gap-y-12">
            {leaders.map(({ photoSrc, firstName, lastName, role }, index) => (
              <LeaderMember
                key={index}
                photoSrc={photoSrc}
                firstName={firstName}
                lastName={lastName}
                role={role}
              />
            ))}
          </div>
        </div>
        {/* Leaders Section */}
        <div className="flex flex-col justify-center bg-white container py-10 mt-32">
          <h3 className="text-3xl md:text-4xl font-bold text-primary">TEAM</h3>
          <hr className="border-secondary border-t-4 my-8" />
          <div className="leaders grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 gap-y-8">
            {members.map(({ photoSrc, firstName, lastName, role }, index) => (
              <TeamMember
                key={index}
                photoSrc={photoSrc}
                firstName={firstName}
                lastName={lastName}
                role={role}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Begin Join Us Section */}
      <div className="flex flex-col items-center justify-center bg-home-3 bg-no-repeat bg-cover mt-32 py-10 md:py-20 px-6">
        <div className="flex flex-col items-center justify-center lg:container text-white">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center">
            Join Us
          </h3>
          <p className="text-center text-xl mt-4 md:mt-6">
            We’re always looking for amazing people to join our growing team
          </p>
          <button className="btn-primary font-medium text-primary bg-white text-xl w-full md:w-auto mt-4 md:mt-16">
            Careers
          </button>
        </div>
      </div>
    </>
  );
}
