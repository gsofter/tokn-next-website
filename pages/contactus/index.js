export default function ContactUsPage() {
  return (
    <>
      <div className="section-1">
        <div className="w-full container max-w-7xl">
          <h3 className="section-title border-b-4 border-secondary pb-8">
            Contact Us
          </h3>
          <div className="form w-full flex flex-col justify-center items-center gap-y-0 mt-8">
            <div className="w-full flex flex-wrap justify-center items-center mt-8">
              <div className="w-full md:w-1/3 px-2">
                <input
                  className="bg-primary w-full h-16"
                  placeholder="First name*"
                />
              </div>
              <div className="w-full md:w-2/3 px-2">
                <input
                  className="bg-primary w-full h-16"
                  placeholder="Last name*"
                />
              </div>
            </div>
            <div className="w-full flex flex-wrap justify-center items-center mt-8">
              <div className="w-full md:w-1/2 px-2">
                <input
                  className="bg-primary w-full h-16"
                  placeholder="Email*"
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <input
                  className="bg-primary w-full h-16"
                  placeholder="Company Name*"
                />
              </div>
            </div>
            <div className="w-full flex flex-wrap justify-center items-center mt-8">
              <div className="w-full md:w-1/2 px-2">
                <input
                  className="bg-primary w-full h-16"
                  placeholder="Phone number"
                />
              </div>
              <div className="w-full md:w-1/2 px-2 ">
                <input
                  className="bg-primary w-full h-16"
                  placeholder="Country / Region"
                />
              </div>
            </div>
            <div className="w-full flex flex-wrap justify-center items-center mt-8">
              <div className="w-full px-2">
                <textarea
                  className="w-full h-80 rounded-card-1 bg-secondary"
                  placeholder="message"
                />
              </div>
            </div>
            <div className="w-full inline-flex justify-center items-center p-4">
              <p>
                Tokenizer collects this information so we can send you valuable
                content, and to contact you about our products & services. For
                information on how to unsubscribe, as well as our privacy
                protection practices, please review our Privacy Policy
              </p>
            </div>
            <div className="w-full inline-flex justify-start items-center p-4">
              <input
                id="term"
                type="radio"
                name="term"
                value="term"
                className="w-5 h-5"
              ></input>
              <label htmlFor="term" className="ml-3">
                I agree to receive other communications from Tokenizer.*
              </label>
            </div>
            <div className="w-full inline-flex justify-center items-center p-4 pl-0">
              <button
                type="submit"
                className="btn-primary font-medium px-16 py-3 outline-none"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
