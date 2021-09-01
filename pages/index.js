
import { Hero } from "@components/ui/common"
import { CourseList } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { getAllCourses } from "@content/courses/fetcher"
import { useWeb3 } from "@components/providers"

export default function Home({courses}) {
  const { web3, isLoading } = useWeb3()

  return (
    <>
      { isLoading ? "Is Loading Web3..." : web3 ? "Web 3 Ready!" : "Please install metamask" }
      <Hero />
      <CourseList
        courses={courses}
      />
    </>
  )
}

export function getStaticProps() {
  const { data } = getAllCourses()
  return {
    props: {
      courses: data
    }
  }
}

Home.Layout = BaseLayout
