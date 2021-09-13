

import { normalizeOwnedCourse } from "@utils/normalize"
import useSWR from "swr"

export const handler = (web3, contract) => account => {

  const swrRes = useSWR(() =>
    (web3 && contract && account) ? `web3/managedCourses/${account}` : null,
    async () => {
      const courses = [1,2,3,4]

      return courses
    }
  )

  return swrRes
}
