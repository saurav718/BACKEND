// console.log("CHAI AUR CODE");
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubdata={
  "login": "saurav718",
  "id": 180173133,
  "node_id": "U_kgDOCr05TQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/180173133?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/saurav718",
  "html_url": "https://github.com/saurav718",
  "followers_url": "https://api.github.com/users/saurav718/followers",
  "following_url": "https://api.github.com/users/saurav718/following{/other_user}",
  "gists_url": "https://api.github.com/users/saurav718/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/saurav718/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/saurav718/subscriptions",
  "organizations_url": "https://api.github.com/users/saurav718/orgs",
  "repos_url": "https://api.github.com/users/saurav718/repos",
  "events_url": "https://api.github.com/users/saurav718/events{/privacy}",
  "received_events_url": "https://api.github.com/users/saurav718/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Saurav beura ",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "MERN Stack Developer who loves turning ideas into interactive web experiences 🌐 | JavaScript addict ⚡ | Learning, building, and sharing 🚀",
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 1,
  "following": 3,
  "created_at": "2024-09-02T10:34:15Z",
  "updated_at": "2026-01-13T09:46:50Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.get('/login',(req , res)=>{
    res.send('<h1>Login Page</h1>')
})

app.get('/github',(req, res)=>{
    res.json(githubdata)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})