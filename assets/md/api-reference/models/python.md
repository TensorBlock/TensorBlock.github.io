```python
import requests

url = "https://api.forge.tensorblock.co/v1/models"

response = requests.request("GET", url)

print(response.text)
```