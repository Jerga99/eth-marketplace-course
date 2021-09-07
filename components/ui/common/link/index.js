
import Link from "next/link"
import React from "react"

export default function ActiveLink({children, ...props}) {

  let className = children.props.className || ""

  return (
    <Link {...props}>
      {
        React.cloneElement(children, {className})
      }
    </Link>
  )
}
