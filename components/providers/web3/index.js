const { createContext, useContext } = require("react");

const Web3Context = createContext(null)

export default function Web3Provider({children}) {
  return (
    <Web3Context.Provider value={{test: "Hello"}}>
      {children}
    </Web3Context.Provider>
  )
}

export function useWeb3() {
  return useContext(Web3Context)
}

