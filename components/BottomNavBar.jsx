import Link from 'next/link';

const BottomNavBar = () => {
  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 md:hidden">
      <div className="bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white shadow-lg radius-2xl">
            <div className="flex">
              <div className="flex-1 group">
                <Link href="/" legacyBehavior>
                  <a className="flex flex-col items-center justify-center px-4 pt-2 text-gray-400 group-hover:text-indigo-500">
                    <i className="fas fa-home text-2xl"></i>
                    <span className="text-xs">Home</span>
                    <span className="block w-5 h-1 mt-1 bg-transparent group-hover:bg-indigo-500 rounded-full"></span>
                  </a>
                </Link>
              </div>
              <div className="flex-1 group">
                <Link href="/appoint" legacyBehavior>
                  <a className="flex flex-col items-center justify-center px-4 pt-2 text-gray-400 group-hover:text-indigo-500">
                    <i className="fas fa-calendar-alt text-2xl"></i>
                    <span className="text-xs">Appoint</span>
                    <span className="block w-5 h-1 mt-1 bg-transparent group-hover:bg-indigo-500 rounded-full"></span>
                  </a>
                </Link>
              </div>
              <div className="flex-1 group">
                <Link href="/add" legacyBehavior>
                  <a className="add-btn flex flex-col items-center justify-center px-4 pt-2 text-gray-400 group-hover:text-indigo-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    {/* <span className="text-xs">Add</span> */}
                    <span className="block w-5 h-1 mt-1 bg-transparent group-hover:bg-indigo-500 rounded-full"></span>
                  </a>
                </Link>
              </div>
              <div className="flex-1 group">
                <Link href="/search" legacyBehavior>
                  <a className="flex flex-col items-center justify-center px-4 pt-2 text-gray-400 group-hover:text-indigo-500">
                    <i className="fas fa-search text-2xl"></i>
                    <span className="text-xs">Search</span>
                    <span className="block w-5 h-1 mt-1 bg-transparent group-hover:bg-indigo-500 rounded-full"></span>
                  </a>
                </Link>
              </div>
              <div className="flex-1 group">
                <Link href="/settings" legacyBehavior>
                  <a className="flex flex-col items-center justify-center px-4 pt-2 text-gray-400 group-hover:text-indigo-500">
                    <i className="fas fa-cog text-2xl"></i>
                    <span className="text-xs">Settings</span>
                    <span className="block w-5 h-1 mt-1 bg-transparent group-hover:bg-indigo-500 rounded-full"></span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavBar;
