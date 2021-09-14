
const CourseMarketplace = artifacts.require("CourseMarketplace")

// Mocha - testing framework
// Chai - assertion JS library

contract("CourseMarketplace", accounts => {

  const courseId = "0x00000000000000000000000000003130";
  const proof = "0x0000000000000000000000000000313000000000000000000000000000003130"
  const value = "900000000";

  let _contract = null
  let contractOwner = null
  let buyer = null

  before(async () => {
    _contract = await CourseMarketplace.deployed()
    contractOwner = accounts[0]
    buyer = accounts[1]
  })

  describe("Purchase the new course", () => {
    before(async() => {
      await _contract.purchaseCourse(courseId, proof, {
        from: buyer,
        value
      })
    })

    it("can get the purchased course hash by index", async () => {
      const index = 0
      const courseHash = await _contract.getCourseHashAtIndex(index)
      const expectedHash = web3.utils.soliditySha3(
        { type: "bytes16", value: courseId },
        { type: "address", value: buyer },
      )

      assert.equal(courseHash, expectedHash, "Course hash is not maching the hash of purchased course!")
    })
  })
})
