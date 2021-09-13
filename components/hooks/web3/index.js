
import { useHooks } from "@components/providers/web3"


const _isEmpty = data => {
  return (
    data == null ||
    data === "" ||
    (Array.isArray(data) && data.length === 0) ||
    (data.constructor === Object && Object.keys(data).length === 0)
  )
}


const enhanceHook = swrRes => {
  const { data, error } = swrRes
  const hasInitialResponse = !!(data || error)
  const isEmpty = hasInitialResponse && _isEmpty(data)

  return {
    ...swrRes,
    isEmpty,
    hasInitialResponse
  }
}

export const useNetwork = () => {
  const swrRes = enhanceHook(useHooks(hooks => hooks.useNetwork)())
  return {
    network: swrRes
  }
}

export const useAccount = () => {
  const swrRes = enhanceHook(useHooks(hooks => hooks.useAccount)())
  return {
    account: swrRes
  }
}

export const useOwnedCourses = (...args) => {
  const swrRes = enhanceHook(useHooks(hooks => hooks.useOwnedCourses)(...args))

  return {
    ownedCourses: swrRes
  }
}

export const useOwnedCourse = (...args) => {
  const swrRes = enhanceHook(useHooks(hooks => hooks.useOwnedCourse)(...args))

  return {
    ownedCourse: swrRes
  }
}

export const useWalletInfo = () => {
  const { account } = useAccount()
  const { network } = useNetwork()

  return {
    account,
    network,
    canPurchaseCourse: !!(account.data && network.isSupported)
  }
}
