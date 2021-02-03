import { useState } from 'react';
import { Transition } from '@headlessui/react';

export default function Accordion({ title, description }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = (event) => {
    event.preventDefault();
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="flex flex-col justify-center items-start py-6">
      <div className="header flex flex-row justify-between w-full">
        <p className="text-primary font-medium text-xl"> {title} </p>
        <a
          onClick={handleCollapse}
          className="text-primary font-bold text-xl cursor-pointer"
        >
          <span>{isCollapsed ? '-' : '+'}</span>
        </a>
      </div>
      <Transition show={isCollapsed}>
        <p
          className="text-secondary text-base mt-8"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Transition>
    </div>
  );
}
