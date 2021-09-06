import { useEthPrice } from "@components/hooks/useEthPrice"
import { useEffect, useState } from "react"


const useCounter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setCount(c => c + 1)
    }, 1000)
  }, [])

  // console.log("Calling useCounter!")

  return count
}


const SimpleComponent = () => {
  // const count = useCounter()
  const { eth } = useEthPrice()

  return (
    <h1>Simple Component - {eth.data}</h1>
  )
}


export default function HooksPage() {
  // const count = useCounter()
  const { eth } = useEthPrice()

  return (
    <>
      <h1>Hello World - {eth.data}</h1>
      <SimpleComponent />
    </>
  )
}
