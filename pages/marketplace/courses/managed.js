

import { useAccount, useManagedCourses } from "@components/hooks/web3";
import { Button } from "@components/ui/common";
import { CourseFilter, ManagedCourseCard, OwnedCourseCard } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { MarketHeader } from "@components/ui/marketplace";

export default function ManagedCourses() {
  const { account } = useAccount()
  const { managedCourses } = useManagedCourses(account.data)

  return (
    <>
      <MarketHeader />
      <CourseFilter />
      <section className="grid grid-cols-1">
        { managedCourses.data?.map(course =>
          <ManagedCourseCard
            key={course.ownedCourseId}
            course={course}
          >
            <div className="flex mr-2 relative rounded-md">
              <input
                type="text"
                name="account"
                id="account"
                className="w-96 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
                placeholder="0x2341ab..." />
              <Button>
                Verify
              </Button>
            </div>
          </ManagedCourseCard>
        )}
      </section>
    </>
  )
}

ManagedCourses.Layout = BaseLayout
