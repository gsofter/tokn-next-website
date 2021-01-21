export default function LeaderMember({
  photoSrc,
  firstName,
  lastName,
  role,
  description,
  contact,
}) {
  return (
    <div className="flex flex-col items-start">
      <img src={photoSrc} alt={firstName + lastName} />
      <p className="text-primary text-xl font-semibold uppercase">
        {firstName} <br /> {lastName}
      </p>
      <p className="text-secondary text-base mt-4">{role}</p>
      <a className="text-primary underline text-base"> INFO </a>
    </div>
  );
}
