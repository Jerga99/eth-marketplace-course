

const Item = ({title, value, className}) => {

  return (
    <div className={`${className} px-4 py-5  sm:px-6`}>
      <div className="text-sm font-medium text-gray-500">
        {title}
      </div>
      <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {value}
      </div>
    </div>
  )
}


export default function ManagedCourseCard({children, course}) {

  return (
    <div className="bg-white border shadow overflow-hidden sm:rounded-lg mb-3">
      <div className="border-t border-gray-200">
        { Object.keys(course).map((key, i) =>
          <Item
            key={key}
            className={`${i % 2 ? "bg-gray-50" : "bg-white"}`}
            // title={key}
            title={key[0].toUpperCase() + key.slice(1)}
            value={course[key]}
          />
        )}
        <div className="bg-white px-4 py-5 sm:px-6">
          {children}
        </div>
      </div>
    </div>
  )
}
