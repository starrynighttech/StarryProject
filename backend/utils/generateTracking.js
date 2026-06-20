const { v4: uuid } =
require("uuid")

module.exports = () => {

  return (
    "SMS-" +
    uuid()
      .substring(0,8)
      .toUpperCase()
  )

}
