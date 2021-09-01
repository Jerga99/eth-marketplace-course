



export default function Button({
  children,
  className = "text-white bg-indigo-600 hover:bg-indigo-700",
  ...rest
}) {

  return (
    <button
      {...rest}
      className={`disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 border rounded-md text-base font-medium ${className}`}>
      {children}
    </button>
  )
}
