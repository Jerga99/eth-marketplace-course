
import { handler as createAccountHook } from "./useAccount"
import { handler as createNetworkHook } from "./useNetwork"
import { handler as createOwnedCoursesHook } from "./useOwnedCourses"
import { handler as createOwnedCourseHook } from "./useOwnedCourse"


export const setupHooks = ({web3, provider, contract}) => {
  return {
    useAccount: createAccountHook(web3, provider),
    useNetwork: createNetworkHook(web3, provider),
    useOwnedCourses: createOwnedCoursesHook(web3, contract),
    useOwnedCourse: createOwnedCourseHook(web3, contract)
  }
}
