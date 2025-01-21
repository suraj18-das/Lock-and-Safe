const HomeSkeletonLoader = () => {
    return (
      <div className="pt-16 animate-pulse">
        <div className="h-[600px] bg-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div>
              <div className="h-16 bg-gray-300 w-2/3 mb-4"></div>
              <div className="h-12 bg-gray-300 w-1/3 mb-8"></div>
              <div className="h-12 bg-gray-300 w-1/4"></div>
            </div>
          </div>
        </div>
  
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-16 bg-gray-300 w-1/4 mb-4"></div>
                <div className="h-12 bg-gray-300 w-3/4 mb-4"></div>
                <div className="h-12 bg-gray-300 w-full"></div>
              </div>
              <div className="h-64 bg-gray-300 rounded-lg shadow-lg"></div>
            </div>
          </div>
        </div>
  
        <div className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="h-12 bg-gray-300 w-1/3 self-center mb-4"></div>
              <div className="h-12 bg-gray-300 w-1/2 self-center mt-4"></div>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 text-center"
                  >
                    <div className="h-12 bg-gray-300 self-center mb-4"></div>
                    <div className="h-10 bg-gray-300 w-2/3 self-center mb-2"></div>
                    <div className="h-6 bg-gray-300 w-full self-center"></div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomeSkeletonLoader;
  