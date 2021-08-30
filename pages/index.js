
export default function Home() {
  return (
    <div>
      <div className="relative bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">

          {/*------ NAVBAR STARTS ------*/}
          <section>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative" aria-label="Global">
                <div className="flex justify-between">
                  <div>
                    <a href="#" className="font-medium mr-8 text-gray-500 hover:text-gray-900">Product</a>
                    <a href="#" className="font-medium mr-8 text-gray-500 hover:text-gray-900">Features</a>
                    <a href="#" className="font-medium mr-8 text-gray-500 hover:text-gray-900">Marketplace</a>
                  </div>
                  <div>
                    <a href="#" className="font-medium mr-8 text-gray-500 hover:text-gray-900">Company</a>
                    <a href="#" className="font-medium mr-8 text-indigo-600 hover:text-indigo-500">Log in</a>
                  </div>
                </div>
              </nav>
            </div>
          </section>
          {/*------ NAVBAR ENDS ------*/}
          <div className="fit">

            {/*------ HERO STARTS ------*/}
            <section className="lg:2/6 text-left my-28">
              <div className="text-6xl font-semibold text-gray-900 leading-none">Grow your career as a developer</div>
              <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">Learn programming and web development the easy way! Get unlimited access to all of our courses.</div>
              <div className="mt-5 sm:mt-8 flex lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Get started
                  </a>
                </div>
              </div>
            </section>
            {/*------ HERO ENDS ------*/}

            {/*------ BREADCRUMBS STARTS ------*/}
            <nav aria-label="breadcrumb" className="mb-4">
              <ol className="flex leading-none text-indigo-600 divide-x divide-indigo-400">
                <li className="pr-4"><a href="#">Buy</a></li>
                <li className="px-4"><a href="#">My Orders</a></li>
                <li className="px-4"><a href="#">All Orders</a></li>
              </ol>
            </nav>
            {/*------ BREADCRUMBS ENDS ------*/}

            {/*------ ADDRESS STARTS ------*/}
            <section className="text-white bg-indigo-600">
              <div className="p-8">
                <h1 className="text-2xl">Hello, 0xd9D5cD41Fe921A743F2b5Fe71CC3070F5C176208</h1>
                <h2 className="subtitle mb-5 text-xl">I hope you are having a great day!</h2>
                <div className="flex justify-between items-center">
                  <div className="sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10">
                        Learn how to purchase
                      </a>
                    </div>
                  </div>
                  <div>
                    <div><span>Currently on </span><strong className="text-2xl">Ethereum Main Network</strong></div>
                  </div>
                </div>
              </div>
            </section>
            {/*------ ADDRESS ENDS ------*/}

            {/*------ CURRENCY STARTS ------*/}
            <div className="grid grid-cols-4 mb-5">
              <div className="flex flex-1 items-stretch text-center">
                <div className="p-10 border drop-shadow rounded-md">
                  <div>
                    <span className="text-2xl font-bold">ETH = 3145.1$</span>
                  </div>
                  <p className="text-xl text-gray-500">Current eth Price</p>
                </div>
              </div>
              <div className="flex flex-1 items-stretch text-center">
                <div className="p-10 border drop-shadow rounded-md">
                  <div>
                    <span className="text-2xl font-bold">0.004769 = 15$</span>
                  </div>
                  <p className="text-xl text-gray-500">Price per course</p>
                </div>
              </div>
            </div>
            {/*------ CURRENCY ENDS ------*/}

            {/*------ ORDER INFO STARTS ------*/}
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
            {/*------ ORDER INFO ENDS ------*/}

            {/*------ COURSE CARD STARTS ------*/}
            <section className="grid grid-cols-2 gap-4 mb-5">
              { Array.from({length: 4}).map((_, i) =>
                <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <img className="h-48 w-full object-cover md:w-48" src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Man looking at item at a store" />
                    </div>
                    <div className="p-8">
                      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                      <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                    </div>
                  </div>
                </div>
              )}
            </section>
            {/*------ COURSE CARD ENDS ------*/}

          </div>
        </div>
        {/*------ FOOTER STARTS ------*/}
        <footer className="bg-gray-900 pt-1">
          <div className="container mx-auto px-6">
            <div className="mt-5 flex flex-col items-center">
              <div className="py-6">
                <p className="mb-6 text-white text-sm text-primary-2 font-bold">
                    © {new Date().getFullYear()} Eincode
                </p>
              </div>
            </div>
          </div>
        </footer>
        {/*------ FOOTER ENDS ------*/}
      </div>
    </div>
  )
}
