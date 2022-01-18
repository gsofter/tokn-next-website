import { Transition } from '@headlessui/react';
import { useState } from 'react';
export default function LeaderMember({
  photoSrc,
  firstName,
  lastName,
  role,
  description,
  email,
  linkedin,
  modalPhotoSrc,
}) {
  const [showModal, setShowModal] = useState(false);
  const handleClickInfo = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex items-center justify-center md:justify-start">
      <div className="flex flex-col items-start">
        <img src={photoSrc} alt={firstName + lastName} />
        <p className="text-primary text-xl font-semibold uppercase mt-4 md:mt-8">
          {firstName} <br /> {lastName}
        </p>
        <p
          className="text-secondary text-base mt-4"
          dangerouslySetInnerHTML={{ __html: role }}
        />
        <a
          className="text-primary underline text-base mt-1 cursor-pointer"
          onClick={handleClickInfo}
        >
          INFO
        </a>
      </div>

      <Transition
        show={showModal}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-200"
        leaveTo="opacity-0"
      >
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div
              className="inline-block transform bg-secondary shadow-card rounded-xl px-12 py-12 container md:max-w-screen-md"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="header text-right">
                <a
                  onClick={handleCloseModal}
                  className="text-primary text-2xl cursor-pointer"
                >
                  <span>
                    <i className="fas fa-times"></i>
                  </span>
                </a>
              </div>
              <div className="flex flex-col lg:flex-row justify-center items-start">
                <div className="photo w-full lg:w-1/3">
                  <img src={modalPhotoSrc} />
                </div>
                <div className="w-full lg:w-2/3 text-left px-8">
                  <h3 className="text-primary text-xl font-bold uppercase">
                    {firstName} {lastName}
                  </h3>
                  <p className="text-xl font-medium text-primary"> {role} </p>
                  <p className="text-base text-secondary mt-6 tracking-wide">
                    {description}
                  </p>
                  <div className="flex flex-row justify-start items-center mt-4">
                    <a className="flex items-center justify-center rounded-full bg-button-primary text-white text-xl w-10 h-10">
                      <span className="rounded-full">
                        <i className="fab fa-linkedin-in"></i>
                      </span>
                    </a>
                    <a className="flex items-center justify-center rounded-full bg-button-primary text-white text-xl w-10 h-10 ml-4">
                      <span className="rounded-full">
                        <i className="far fa-envelope"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}
