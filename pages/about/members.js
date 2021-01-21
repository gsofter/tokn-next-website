import LeaderMember from '../../components/LeaderMember';

const leaders = [
  {
    photoSrc: `${__dirname}images/members/manindra_ma_jumar.png`,
    firstName: 'manindra',
    lastName: 'ma jumar',
    role: 'Chief Executive Officer',
  },
  {
    photoSrc: `${__dirname}images/members/manindra_ma_jumar.png`,
    firstName: 'manindra',
    lastName: 'ma jumar',
    role: 'Chief Executive Officer',
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
