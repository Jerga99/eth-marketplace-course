import { useEffect } from "react"
import useSWR from "swr"

const NETWORKS = {
  1: "Ethereum Main Network",
  3: "Ropsten Test Network",
  4: "Rinkeby Test Network",
  5: "Goerli Test Network",
  42: "Kovan Test Network",
  56: "Binance Smart Chain",
  1337: "Ganache",
}

const targetNetwork = NETWORKS[process.env.NEXT_PUBLIC_TARGET_CHAIN_ID]

export const handler = (web3, provider) => () => {

  const { data, mutate, ...rest } = useSWR(() =>
    web3 ? "web3/network" : null,
    async () => {
      const chainId = await web3.eth.getChainId()

      if (!chainId) {
        throw new Error("Cannot retreive network. Please refresh the browser.")
      }

      return NETWORKS[chainId]
    }
  )

  useEffect(() => {
    const mutator = chainId => mutate(NETWORKS[parseInt(chainId, 16)])
    provider?.on("chainChanged", mutator)

    return () => {
      provider?.removeListener("chainChanged", mutator)
    }
  }, [provider])

  return {
    data,
    mutate,
    target: targetNetwork,
    isSupported: data === targetNetwork,
    ...rest
  }
}
