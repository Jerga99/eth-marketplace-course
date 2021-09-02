
import { handler as createUseAccount } from "./useAccount";

export const setupHooks = (...deps) => {
  return {
    useAccount: createUseAccount(...deps)
  }
}
