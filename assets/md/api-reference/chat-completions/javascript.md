```javascript
const body = JSON.stringify({
  "model": "OpenAI/gpt-4o",
  "messages": [
    {
      "role": "user",
      "content": "Hello!"
    }
  ]
})

fetch("https://api.forge.tensorblock.co/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer $FORGE_API_KEY"
  },
  body
})