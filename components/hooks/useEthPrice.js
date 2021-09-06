import useSWR from "swr"

const URL = "https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false"

const fetcher = async url => {
  const res = await fetch(url)
  const json = await res.json()
  return json.market_data.current_price.usd ?? null
}

export const useEthPrice = () => {
  const swrRes = useSWR(
    URL,
    fetcher,
    { refreshInterval: 1000 }
  )

  return { eth: {...swrRes}}
}

