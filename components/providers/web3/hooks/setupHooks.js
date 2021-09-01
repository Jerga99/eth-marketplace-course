
import { useAccount } from "./useAccount";

const DEFAULT_HOOKS = {
  useAccount: () => ({account: null})
}

export const setupHooks = web3 => {
  if (!web3) { return DEFAULT_HOOKS }

  return {
    useAccount: useAccount(web3)
  }
}
