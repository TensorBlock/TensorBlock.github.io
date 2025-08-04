```python
import requests

url = "https://api.forge.tensorblock.co/v1/models"

response = requests.request("GET", url, headers = {
  "Authorization": "Bearer $FORGE_API_KEY"
})

print(response.text)