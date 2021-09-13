


export const createCourseHash = web3 => (courseId, account) => {
  const hexCourseId = web3.utils.utf8ToHex(courseId)
  const courseHash = web3.utils.soliditySha3(
    { type: "bytes16", value: hexCourseId },
    { type: "address", value: account }
  )

  return courseHash
}
