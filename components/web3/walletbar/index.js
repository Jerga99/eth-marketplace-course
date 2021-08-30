

export default function WalletBar() {

  return (
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
  )
}
