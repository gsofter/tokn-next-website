import Image from 'next/image';
import Link from 'next/link';
const BlogItem = ({ title, blogLink, imageUrl }) => {
  return (
    <div className="flex flex-col items-start justify-start mt-2 md:mt-0">
      <div className="container w-full">
        <img src={imageUrl} className="w-full" />
      </div>
      <p className="text-secondary text-xl mt-4 md:mt-10 md:min-h-xl md:min-h-70">
        {title}
      </p>
      <Link href={blogLink} className="mt-10">
        <p className="text-primary text-xl"> Read More </p>
      </Link>
    </div>
  );
};

export default BlogItem;
