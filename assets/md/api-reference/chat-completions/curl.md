```bash
curl -X POST "https://api.forge.tensorblock.co/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $FORGE_API_KEY" \
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