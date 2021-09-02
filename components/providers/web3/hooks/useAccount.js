


export const handler = web3 => () => {
  return {
    account: web3 ? "Test Account" : "null"
  }
}
