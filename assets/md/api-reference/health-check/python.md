```python
import requests

url = "https://api.forge.tensorblock.co/"

response = requests.request("GET", url)

print(response.text)
```