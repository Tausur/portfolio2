import cookie from 'cookie'

export default function handler(req, res) {
  if (req.method == 'POST') {
    if (req.body.name == process.env.ADMIN_USERNAME && req.body.password == process.env.ADMIN_PASSWORD) {

      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", process.env.TOKEN, {
          maxAge: 60,
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(200).json("Admin login succesfull")
    } else {
      res.status(404).json("Admin login failed")
    }
  } else {
    res.status(500).json("This method is not allowed")
  }
}