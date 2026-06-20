const notifications = []

function enqueue(
  notification
){

  notifications.push(
    notification
  )

}

function processQueue(){

  while(
    notifications.length
  ){

    const item =
    notifications.shift()

    console.log(
      "Sending:",
      item
    )

  }

}

module.exports = {
  enqueue,
  processQueue
}
