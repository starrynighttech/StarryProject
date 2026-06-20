const auth =
require("../middleware/auth")

const admin =
require("../middleware/admin")

router.get(
  "/stats",
  auth,
  admin,
  async(req,res)=>{
    ...
  }
)
