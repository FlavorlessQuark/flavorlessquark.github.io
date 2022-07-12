const express = require("express")
const app = express()
const server = require("http").createServer(app)
const path = require("path")

const PORT = process.env.PORT || 5000

function ensureHttps(req, res, next) {
  if (req.headers["x-forwarded-proto"] === "https") {
    return next()
  }
  res.redirect("https://" + req.hostname + req.url)
}

if (process.env.PRODUCTION === "1") {
  app.all("*", ensureHttps)
}

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Credentials", true)
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  )
  next()
})

app.use(express.static("build"))

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"), function (err) {
    if (err) {
      console.log(err)
    }
  })
})

server.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)
})
