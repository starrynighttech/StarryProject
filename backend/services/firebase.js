const admin =
require("../config/firebase")

async function sendPush(
  token,
  title,
  body
){

  await admin.messaging().send({

    token,

    notification:{
      title,
      body
    }

  })

}

module.exports = {
  sendPush
}
