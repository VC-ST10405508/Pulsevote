 

# Contents
Why Security Matters for a live polling app: 1

 
## Why Security Matters for a live polling app:
Security really matters in live polling apps because without it, people can cheat or use bots to mess with the results. That makes the poll feel unfair and the data unreliable. These apps also gather a lot of responses, so if privacy isn't protected, sensitive information could leak. Strong security helps keep the results trustworthy and keeps everyone's data safe.

## Importance of SSL:
SSL/TLS is what locks the connection between your browser and a website so that nobody in the middle can sneak a peek or tamper with your data. Unlike plain http, Https wraps all communications with encryptions – thus proving the sites identity and securing the information that is sent back and forth. Without SSL, things like passwords, votes, or poll answers could be intercepted or changed by bad actors. A web app lacking SSL/TLS is vulnerable to Man-in-the-middle attack, spoofing and other forms of data theft. SSL/TLS is essential if you want to keep your data secure. 

## Adding SSL:
I followed the steps to the best of my ability but I still did not have a padlock on my website after adding the certificate to the trusted root certificate authorities folder. I don't know why. However, I didn't get any warnings when entering the site.

## JWT token:
A JWT (JSON Web Token) is like a digital ID card for users. After someone logs in, the server gives them this token, and they can use it to prove who they are on future requests—without the server having to remember every session. It makes things faster and easier, especially for apps running on multiple servers or devices. But if this token travels over an unprotected connection, hackers could grab it and pretend to be that user. Real-life examples, like Auth0's "alg: none" issue or Cisco's hardcoded JWT secret, show how risky it can be if tokens aren't handled properly. That's why it's crucial to use strong secrets, check tokens carefully, and always use HTTPS. I think that JWT tokens are great to use for identifying who is trying to access something. However I think its also very important to note that authorization protocols should be put in place to prevent some users from doing certain activities.

## ChatGPT researched what each of the imports provide:
Since this is an ice task. I decided to let chatgpt generate the report to save me time. If you feel chatgpt is wrong please inform me where and with what research to back it up. Generally speaking chatgpt should be able to determine what a command does since its straight forward and has a solid answer.

the command that chatgpt wrote its response to: 
`npm install express mongoose dotenv cors bcrypt jsonwebtoken`

explain what each offers the node.js project

chatgpt's response:

start
---
📦 1. express
• A web framework for Node.js.
• Handles routing (GET, POST, etc.), middleware, and request/response logic.
• Lets you build APIs or full web apps easily without writing tons of boilerplate code.
👉 Think of it as the backbone of your server.
________________________________________

📦 2. mongoose
• An ODM (Object Data Modeling) library for MongoDB.
• Makes it easier to interact with MongoDB by defining schemas and models.
• Helps with validation, relationships, and querying in a more structured way.
👉 Instead of writing raw MongoDB queries, you use Mongoose objects.
________________________________________

📦 3. dotenv
• Loads environment variables from a .env file into process.env.
• Keeps secrets (like database passwords, API keys, JWT secrets) out of your code.
• Example:
• require('dotenv').config()
• console.log(process.env.DB_URI)
👉 Essential for security and configuration management.
________________________________________

📦 4. cors
• Stands for Cross-Origin Resource Sharing.
• Lets your backend handle requests from different domains (e.g., frontend at http://localhost:3000 calling backend at http://localhost:5000).
• Without it, browsers may block such requests.
👉 Basically a gatekeeper for who's allowed to talk to your API.
________________________________________

📦 5. bcrypt
• A library to hash passwords before saving them in the database.
• Hashing is one-way (can't be reversed easily), making passwords safer.
• Supports "salting" (adding randomness) to protect against rainbow table attacks.
👉 Never store raw passwords — always hash with bcrypt.
________________________________________

📦 6. jsonwebtoken (JWT)
• Creates and verifies JSON Web Tokens.
• Tokens are used for authentication (e.g., after login, a user gets a token to access protected routes).
• Contains payload (like user ID), a secret key, and an expiry time.
👉 Core to secure, stateless authentication in modern apps.
________________________________________

⚡ In short:
• express → build API
• mongoose → talk to MongoDB
• dotenv → hide secrets/configs
• cors → allow cross-domain requests
• bcrypt → protect passwords
• jsonwebtoken → secure authentication
---
end

I think chatgpt's response covers what each does quite well but AI can be wrong. Hallucinations and other factors such as GIGO (garbage in, garbage out) can affect its response.
