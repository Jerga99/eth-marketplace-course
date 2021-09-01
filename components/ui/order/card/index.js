


export default function Card() {

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-3">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Next JS & Typescript with Shopify Integration - Full Guide
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          0.0065 ETH
        </p>
      </div>

      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Order ID
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              0x9a4e56614591da8c1ad30fe04ac672111a7f20faa92f7c484568b0213bfbf405
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Proof
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              0x95f147a2c0ced33a2d49b7ce780bc2a9cf404593c64658b336ab2eb7d9136d90
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:px-6">
            <div className="bg-green-100 rounded-xl mb-3">
              <div className="max-w-7xl mx-auto py-3 px-3 sm:px-3 lg:px-3">
                <div className="flex items-center justify-between flex-wrap">
                  <div className="w-0 flex-1 flex items-center">
                    <p className="ml-3 font-medium text-green-900 truncate">
                      <span className="hidden md:inline">
                        Purchased!
                      </span>
                    </p>
                  </div>
                  <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                    <button type="button" className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
                      <span className="sr-only">Dismiss</span>
                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow-md">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 md:py-4 md:text-md md:px-10">
                  Watch the course
                </a>
              </div>
            </div>
            <div className="mt-2">
              <div className="mt-1 relative rounded-md w-72">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md" placeholder="x@y.com" />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <label htmlFor="currency" className="sr-only">Currency</label>
                  <div className="flex lg:justify-start">
                    <div className="rounded-md shadow">
                      <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:px-10">
                        Search
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative inline-block w-full text-gray-700">
              <select className="w-72 h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
                <option>A regular sized select input</option>
                <option>Another option</option>
                <option>And one more</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
              </div>
            </div>
          </div>
        </dl>
      </div>
    </div>
  )
}
