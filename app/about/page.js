const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-violet-600">
      <div className="bg-inherit py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              About Our Service
            </h2>
            <p className="mt-4 text-lg text-black font-mono font-bold">
              PASTIT.NOW - Your Secure Rich Text Sharing Platform
            </p>
          </div>
          <div className="mt-16">
            <div className="flex flex-row gap-8 justify-around px-12">
              <div className="bg-violet-400 overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 font-mono">
                    Secure and Private
                  </h3>
                  <p className="mt-2 text-base text-gray-500 font-mono">
                    We prioritize the security and privacy of your shared text.
                    All data is encrypted and stored securely.
                  </p>
                </div>
              </div>
              <div className="bg-violet-400 overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 font-mono">
                    Easy to Use
                  </h3>
                  <p className="mt-2 text-base text-gray-500 font-mono">
                    Our platform is designed to be user-friendly and intuitive,
                    allowing you to quickly share and manage your text snippets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
