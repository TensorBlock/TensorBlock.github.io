```python
import requests

url = "https://api.forge.tensorblock.co/v1/chat/completions"
body = {
  "model": "gpt-4o",
  "messages": [
    {
      "role": "user",
      "content": "Hello!"
    }
  ]
}
response = requests.request("POST", url, json = body, headers = {
  "Content-Type": "application/json"
})

print(response.text)
```