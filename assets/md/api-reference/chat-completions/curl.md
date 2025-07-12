```bash
curl -X POST "https://api.forge.tensorblock.co/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "OpenAI/gpt-4o",
    "messages": [
      {
        "role": "user",
        "content": "Hello!"
      }
    ]
}'
```