
import { Hero } from "@components/common"
import { CourseList } from "@components/course"
import { BaseLayout } from "@components/layout"
import { getAllCourses } from "@content/courses/fetcher"

export default function Home({courses}) {
  return (
    <>
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
