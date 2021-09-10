import useSWR from "swr"



export const handler = (web3, contract) => (courses, account) => {

  const swrRes = useSWR(() =>
    (web3 && contract && account) ? "web3/ownedCourses" : null,
    async () => {
      const ownedCourses = []

      for (let i = 0; i < courses.length; i++) {
        const course = courses[i]
        ownedCourses.push(course.id)
      }

      return ownedCourses
    }
  )

  return swrRes
}
