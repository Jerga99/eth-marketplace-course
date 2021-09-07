
import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"

export default function ActiveLink({children, activeLinkClass, ...props}) {
  const { pathname } = useRouter()
  let className = children.props.className || ""

  if (pathname === props.href) {
    className = `${className} ${activeLinkClass ? activeLinkClass : "text-indigo-600"}`
  }

  return (
    <Link {...props}>
      {
        React.cloneElement(children, {className})
      }
    </Link>
  )
}
