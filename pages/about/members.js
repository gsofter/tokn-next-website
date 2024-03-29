import LeaderMember from '../../components/LeaderMember';
import TeamMember from '../../components/TeamMember';
const leaders = [
  {
    photoSrc: `${__dirname}images/members/leaders/manindra_ma_jumar.png`,
    modalPhotoSrc: `${__dirname}images/members/leaders/manindra_ma_jumar_d.png`,
    firstName: 'manindra',
    lastName: 'majumdar',
    role: 'Chief Executive Officer',
    description:
      'As an experienced entrepreneur with a penchant for new technology, Manindra has worked in international business for over 7 years in 15+ countries. Experienced in AI, AR & Blockchain, he has launched several products in his entrepreneurial and professional career and continues to inspire and innovate as Founder & CEO at Tokenizer. He holds an MBA from the Hult International Business School (San Francisco, USA) Bachelor’s in Business Administration from the Edinburgh Napier University (Scotland, UK).',
  },
  {
    photoSrc: `${__dirname}images/members/leaders/mark_kuper.png`,
    modalPhotoSrc: `${__dirname}images/members/leaders/mark_kuper_d.png`,
    firstName: 'marc',
    lastName: 'kuper',
    role: 'Chief Operation Officer',
    description:
      'Prior to leading Operations at Tokenizer, Mark served as COO and CCO at Higher Moment Capital LP, a Quantitative Hedge Fund in Boston MA. In ‘02 he co-founded Telluride Asset Management LLC, and led the fund management company as COO and CCO of the firm. Prior to Telluride, at Knight Capital Group he served as Senior-Vice President and Head of Corporate Strategy and New Business Initiatives of the $8b market cap public company. Mark started his career as a market maker and trader and brings with him over 30 years of leadership experience across operations, compliance, marketing and business development.',
  },
  {
    photoSrc: `${__dirname}images/members/leaders/fernando_gamonal.png`,
    modalPhotoSrc: `${__dirname}images/members/leaders/fernando_gamonal_d.png`,
    firstName: 'fernando',
    lastName: 'gamonal',
    role: 'Chief Business Officer',
    description:
      'With over 20 years of experience, Fernando started his career as a financial analyst with Hewlett Packard in Germany, moving to American Express as Finance Head for Central & Eastern Europe and eventually becoming CEO Switzerland(a.i. CEO Germany). He has since developed his career on the start-up world, having co-founded companies in E-commerce and Fin-Tech and now applies his expertise to accelerate blockchain driven growth at Tokenizer',
  },
  {
    photoSrc: `${__dirname}images/members/leaders/stephan_ashworth.png`,
    modalPhotoSrc: `${__dirname}images/members/leaders/stephan_ashworth_d.png`,
    firstName: 'stephan',
    lastName: 'ashworth',
    role: 'Chief Product Officer',
    description:
      'Stephen leads Tokenizer’s product development, bringing blockchain experience from Digital Fund Exchange, which he set up in 2018 as a new trading and clearing venue for mutual funds leveraging blockchain technology. Previously, Stephen set up Synrex (2014) to create a new B2B market to offer liquidity in derivative style hedging instruments for real estate values. He brings over 25 years experience in capital markets, across property, derivatives and hedge funds. Prior to founding Synrex, he has driven growth and innovation as Head of Investment Committee & Portfolio Manager of Iceberg Alternative Real Estate Fund (2006-13), founding partner of SunGard Reech (1999-06), Head of Equity Derivatives at First Chicago & Equity (1994-99), Equity Derivatives Trader at Citigroup (1992-94) and as ACA Accountant with KPMG (1988-92). He holds a BSc Hons in Mathematics from Southampton University.',
  },
  {
    photoSrc: `${__dirname}images/members/leaders/partha_mitra.png`,
    modalPhotoSrc: `${__dirname}images/members/leaders/partha_mitra_d.png`,
    firstName: 'partha',
    lastName: 'mitra',
    role: 'Chief Technology Officer',
    description:
      'Partha leads Technology at Tokenizer and comes with over 15 years of experience spanning Asia, Europe and North America, with a focus on Investment Banking & Technology, at Wall Street firms such as BNY Mellon and Man Capital Market. He has helped build large scale Trading and Investment platforms managing multi-billion dollars institutional portfolios in Equity, Derivatives, ETF and Bitcoin Future Crypto desk. Partha started his career as software engineer and has held leadership positions at global asset management firms. He earned his Executive Fellowship at Massachusetts Institute of Technology, Master’s degree in Management and Systems from New York University, and Bachelor’s in Information Science & Engineering from Visvesvaraya Technological University.',
  },
  {
    photoSrc: `${__dirname}images/members/leaders/jemima_spiteri.png`,
    modalPhotoSrc: `${__dirname}images/members/leaders/jemima_spiteri_d.png`,
    firstName: 'jemima',
    lastName: 'spiteri',
    role: 'Director of People & Culture',
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
    firstName: 'Gia',
    lastName: 'Khanna',
    role: 'VP, Corporate <br /> Development',
    photoSrc: `${__dirname}images/members/members/gia_khanna.png`,
  },
  {
    firstName: 'jesse',
    lastName: 'hambly',
    role: 'VP, Business <br /> Development',
    photoSrc: `${__dirname}images/members/members/jesse_hambly.png`,
  },
  {
    firstName: 'priyanka',
    lastName: 'khandali',
    role: 'VP, Marketing',
    photoSrc: `${__dirname}images/members/members/placeholder.png`,
  },
  {
    firstName: 'amit',
    lastName: 'joshi',
    role: 'Director of Business <br /> development',
    photoSrc: `${__dirname}images/members/members/amit_joshi.png`,
  },
  {
    firstName: 'gal',
    lastName: 'bakalo',
    role: 'Director of <br /> Business <br /> development',
    photoSrc: `${__dirname}images/members/members/placeholder.png`,
  },
  {
    firstName: 'kevin',
    lastName: 'hedlund',
    role: 'Director of <br /> Development - <br /> Equities & Bonds',
    photoSrc: `${__dirname}images/members/members/placeholder.png`,
  },
  {
    firstName: 'matthew',
    lastName: 'spino',
    role: 'Director of Business <br /> development',
    photoSrc: `${__dirname}images/members/members/placeholder.png`,
  },
  {
    firstName: 'paula',
    lastName: 'sweis',
    role:
      'Director of Business <br /> Development - <br /> Real Estate & Funds',
    photoSrc: `${__dirname}images/members/members/paula_sweis.png`,
  },
  {
    firstName: 'sam',
    lastName: 'mokhtari',
    role: 'Director of Business <br /> development',
    photoSrc: `${__dirname}images/members/members/sam_mokhtari.png`,
  },
  {
    firstName: 'zafer',
    lastName: 'egri',
    role: 'Director of Business <br /> development',
    photoSrc: `${__dirname}images/members/members/zafer_egri.png`,
  },
  {
    firstName: 'jolien',
    lastName: 'demeyer',
    role: 'Director of Marketing',
    photoSrc: `${__dirname}images/members/members/jolien_demeyer.png`,
  },
  {
    firstName: 'kliment',
    lastName: 'chaikov',
    role: 'Digital Marketing <br /> Manager',
    photoSrc: `${__dirname}images/members/members/placeholder.png`,
  },
  {
    firstName: 'praveen',
    lastName: 'kumar',
    role: 'Digital Marketing <br /> Manager',
    photoSrc: `${__dirname}images/members/members/placeholder.png`,
  },
  {
    firstName: 'jagdish',
    lastName: 'kumar',
    role: 'Content Writer',
    photoSrc: `${__dirname}images/members/members/placeholder.png`,
  },
  {
    firstName: 'josiah',
    lastName: 'makori',
    role: 'Content Writer',
    photoSrc: `${__dirname}images/members/members/josiah_makori.png`,
  },
  {
    firstName: 'vince',
    lastName: 'dioquino',
    role: 'UX Designer & Public <br /> Relations',
    photoSrc: `${__dirname}images/members/members/placeholder.png`,
  },
  {
    firstName: 'barny',
    lastName: 'silvederio',
    role: 'UI / Graphic <br /> Designer',
    photoSrc: `${__dirname}images/members/members/barny_silvederio.png`,
  },
  {
    firstName: 'elnaz',
    lastName: 'omidvar',
    role: 'UX / Graphic <br /> Designer',
    photoSrc: `${__dirname}images/members/members/elnaz_omidvar.png`,
  },
  {
    firstName: 'adelin',
    lastName: 'ionut',
    role: 'Full Stack Developer',
    photoSrc: `${__dirname}images/members/members/adelin_ionut.png`,
  },
  {
    firstName: 'benjamin',
    lastName: 'pacheco',
    role: 'Full Stack Developer',
    photoSrc: `${__dirname}images/members/members/benjamin_pacheco.png`,
  },
  {
    firstName: 'brian',
    lastName: 'zhu',
    role: 'Full Stack Developer',
    photoSrc: `${__dirname}images/members/members/placeholder.png`,
  },
  {
    firstName: 'byron',
    lastName: 'mayorga',
    role: 'Full Stack Developer',
    photoSrc: `${__dirname}images/members/members/byron_mayorga.png`,
  },
  {
    firstName: 'nitish',
    lastName: 'kumar',
    role: 'Full Stack Developer',
    photoSrc: `${__dirname}images/members/members/placeholder.png`,
  },
  {
    firstName: 'syed',
    lastName: 'peeran',
    role: 'Full Stack Developer',
    photoSrc: `${__dirname}images/members/members/placeholder.png`,
  },
  {
    firstName: 'yogesh',
    lastName: 'kumar',
    role: 'Full Stack Developer',
    photoSrc: `${__dirname}images/members/members/yogesh_kumar.png`,
  },
  {
    firstName: 'felipe ramos',
    lastName: 'da silva',
    role: 'Dev Ops Engineer',
    photoSrc: `${__dirname}images/members/members/placeholder.png`,
  },
  {
    firstName: 'fernando',
    lastName: 'santiago',
    role: 'Dev Ops Engineer',
    photoSrc: `${__dirname}images/members/members/fernando_santiago.png`,
  },
  {
    firstName: 'subramanyam',
    lastName: 'chemmarthi',
    role: 'Dev Ops Engineer',
    photoSrc: `${__dirname}images/members/members/subramanyam_chemmarthi.png`,
  },
  {
    firstName: 'amr',
    lastName: 'shaban',
    role: 'Blockchain Engineer',
    photoSrc: `${__dirname}images/members/members/amr_shaban.png`,
  },
  {
    firstName: 'amudhan',
    lastName: 'muthaiah',
    role: 'Blockchain Engineer',
    photoSrc: `${__dirname}images/members/members/placeholder.png`,
  },
  {
    firstName: 'boris',
    lastName: 'kiesse',
    role: 'Blockchain Engineer',
    photoSrc: `${__dirname}images/members/members/boris_kiesse.png`,
  },
  {
    firstName: 'rasin',
    lastName: 'raj',
    role: 'Blockchain Engineer',
    photoSrc: `${__dirname}images/members/members/rasin_raj.png`,
  },
  {
    firstName: 'madhav',
    lastName: 'sharma',
    role: 'Mobile Developer',
    photoSrc: `${__dirname}images/members/members/madhav_sharma.png`,
  },
  {
    firstName: 'anass',
    lastName: 'naoushy',
    role: 'Lead Flutter <br /> Developer',
    photoSrc: `${__dirname}images/members/members/anass_naoushy.png`,
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
            {leaders.map(
              (
                {
                  photoSrc,
                  firstName,
                  lastName,
                  role,
                  description,
                  modalPhotoSrc,
                },
                index,
              ) => (
                <LeaderMember
                  key={index}
                  photoSrc={photoSrc}
                  firstName={firstName}
                  lastName={lastName}
                  role={role}
                  description={description}
                  modalPhotoSrc={modalPhotoSrc}
                />
              ),
            )}
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
          <p className="text-center text-xl text-white mt-4 md:mt-6">
            We’re always looking for amazing people to join our growing team
          </p>
          <a
            href="#"
            className="btn-secondary font-medium text-xl w-full md:w-auto mt-4 md:mt-16"
          >
            Careers
          </a>
        </div>
      </div>
    </>
  );
}
