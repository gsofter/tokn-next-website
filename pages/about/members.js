import LeaderMember from '../../components/LeaderMember';
import { leaders, members } from './data';

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
          <div className="leaders grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {members.map(({ photoSrc, firstName, lastName, role }, index) => (
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
