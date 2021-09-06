
import Image from "next/image"

export default function EthRates({eth, ethPerItem}) {

  return (
    <div className="grid grid-cols-4">
      <div className="flex flex-1 items-stretch text-center">
        <div className="p-10 border drop-shadow rounded-md">
          <div className="flex items-center">
            <Image
              layout="fixed"
              height="35"
              width="35"
              src="/small-eth.webp"
            />
            <span className="text-2xl font-bold">
               = {eth}$
            </span>
          </div>
          <p className="text-xl text-gray-500">Current eth Price</p>
        </div>
      </div>
      <div className="flex flex-1 items-stretch text-center">
        <div className="p-10 border drop-shadow rounded-md">
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              {ethPerItem}
            </span>
            <Image
              layout="fixed"
              height="35"
              width="35"
              src="/small-eth.webp"
            />
            <span className="text-2xl font-bold">
              = 15$
            </span>
          </div>
          <p className="text-xl text-gray-500">Price per course</p>
        </div>
      </div>
    </div>
  )
}
