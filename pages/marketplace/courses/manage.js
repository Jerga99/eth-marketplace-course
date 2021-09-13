

import { useAccount, useManagedCourses } from "@components/hooks/web3";
import { Button } from "@components/ui/common";
import { CourseFilter, OwnedCourseCard } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { MarketHeader } from "@components/ui/marketplace";

export default function ManageCourses() {
  const { account } = useAccount()
  const { managedCourses } = useManagedCourses(account.data)

  console.log(managedCourses.data)
  return (
    <>
      <MarketHeader />
      <CourseFilter />
      <section className="grid grid-cols-1">
        {/* <OwnedCourseCard>
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
        </OwnedCourseCard> */}
      </section>
    </>
  )
}

ManageCourses.Layout = BaseLayout
