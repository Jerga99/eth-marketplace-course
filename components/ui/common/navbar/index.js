



import { useWeb3 } from "@components/providers"
import Link from "next/link"
import { Button } from "@components/ui/common"

export default function Footer() {
  const { connect, isLoading, isWeb3Loaded } = useWeb3()

  return (
    <section>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between">
            <div>
              <Link href="/" >
                <a
                  className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Home
                </a>
              </Link>
              <Link href="/" >
                <a
                  className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Marketplace
                </a>
              </Link>
              <Link href="/" >
                <a
                  className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Blogs
                </a>
              </Link>
            </div>
            <div>
              <Link href="/" >
                <a
                  className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Wishlist
                </a>
              </Link>
              { isLoading ?
                <Button
                  onClick={connect}>
                    Loading...
                </Button> :
                isWeb3Loaded ?
                <Button
                  onClick={connect}>
                    Connect
                </Button> :
                <Button
                  onClick={connect}>
                  Install Metamask
                </Button>
              }
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}
