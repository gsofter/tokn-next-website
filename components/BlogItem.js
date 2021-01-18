import Image from 'next/image';
import Link from 'next/link';
const BlogItem = ({ title, blogLink, imageUrl }) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="relative">
        <Image src={imageUrl} layout="fill" objectFit="scale-down" />
      </div>
      <p className="text-secondary text-xl "> {title}</p>
      <Link href={blogLink}>
        <p className="text-primary text-xl"> Read More </p>
      </Link>
    </div>
  );
};

export default BlogItem;
