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
  body
})
```