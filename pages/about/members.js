import LeaderMember from '../../components/LeaderMember';

const leaders = [
  {
    photoSrc: `${__dirname}images/members/manindra_ma_jumar.png`,
    firstName: 'manindra',
    lastName: 'ma jumar',
    role: 'Chief Executive Officer',
    description:
      'As an experienced entrepreneur with a penchant for new technology, Manindra has worked in international business for over 7 years in 15+ countries. Experienced in AI, AR & Blockchain, he has launched several products in his entrepreneurial and professional career and continues to inspire and innovate as Founder & CEO at Tokenizer. He holds an MBA from the Hult International Business School (San Francisco, USA) Bachelor’s in Business Administration from the Edinburgh Napier University (Scotland, UK).',
  },
  {
    photoSrc: `${__dirname}images/members/manindra_ma_jumar.png`,
    firstName: 'manindra',
    lastName: 'ma jumar',
    role: 'Chief Executive Officer',
    description:
      'As an experienced entrepreneur with a penchant for new technology, Manindra has worked in international business for over 7 years in 15+ countries. Experienced in AI, AR & Blockchain, he has launched several products in his entrepreneurial and professional career and continues to inspire and innovate as Founder & CEO at Tokenizer. He holds an MBA from the Hult International Business School (San Francisco, USA) Bachelor’s in Business Administration from the Edinburgh Napier University (Scotland, UK).',
  },
];
export default function AboutPage() {
  return (
    <>
      {/* Begin Members Sections */}
      <div className="flex flex-col justify-center items-center">
        {/* Leaders Section */}
        <div className="flex flex-col justify-center bg-white container py-10">
          <h3 className="text-3xl md:text-4xl font-bold text-primary">
            Leadership
          </h3>
          <hr className="border-secondary border-t-4 my-8" />
          <div className="leaders grid grid-cols-2 md:grid-cols-4 gap-4">
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
      </div>
    </>
  );
}
