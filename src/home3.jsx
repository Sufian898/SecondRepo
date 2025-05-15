import React from 'react';

export default function Home3() {
  return (
    <div>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            {/* Left Section */}
            <div className="lg:mb-0 mb-10">
              <div className="group w-full h-full">
                <div className="relative h-full">
                  <img
                    src="https://pagedone.io/asset/uploads/1696488602.png"
                    alt="Contact Us"
                    className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
                  />
                  <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                    Contact us
                  </h1>
                  <div className="absolute bottom-0 w-full lg:p-11 p-5">
                    <div className="bg-white rounded-lg p-6 block">
                      <div className="flex items-center mb-6">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.3092 18.3098..."
                            stroke="#4F46E5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <h5 className="text-black text-base font-normal leading-6 ml-5">0349-5022943</h5>
                      </div>
                      <div className="flex items-center mb-6">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.81501 8.75..."
                            stroke="#4F46E5"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <h5 className="text-black text-base font-normal leading-6 ml-5">
                          netitsolution12@gmail.com
                        </h5>
                      </div>
                      <div className="flex items-center">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M25 12.9169..."
                            stroke="#4F46E5"
                            strokeWidth="2"
                          />
                          <path
                            d="M17.5 11.6148..."
                            stroke="#4F46E5"
                            strokeWidth="2"
                          />
                        </svg>
                        <h5 className="text-black text-base font-normal leading-6 ml-5">
                          3rd floor Rehman Plaza Sargodha
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
              <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11">
                Send Us A Message
              </h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                />
                <div className="mb-10">
                  <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">
                    Preferred method of communication
                  </h4>
                  <div className="flex">
                    <div className="flex items-center mr-11">
                      <input
                        id="email-option"
                        type="radio"
                        name="contact-method"
                        value="email"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="email-option"
                        className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6 peer-checked:text-indigo-600"
                      >
                        <span className="border border-gray-300 rounded-full mr-2 w-4 h-4 peer-checked:border-indigo-500 peer-checked:bg-indigo-100 ml-2"></span>
                        Email
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="phone-option"
                        type="radio"
                        name="contact-method"
                        value="phone"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="phone-option"
                        className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6 peer-checked:text-indigo-600"
                      >
                        <span className="border border-gray-300 rounded-full mr-2 w-4 h-4 peer-checked:border-indigo-500 peer-checked:bg-indigo-100 ml-2"></span>
                        Phone
                      </label>
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Message"
                  className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                />
                <button
                  type="submit"
                  className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
