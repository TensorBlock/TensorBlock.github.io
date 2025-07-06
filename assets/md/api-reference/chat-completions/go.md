```go
package main

import (
  "fmt"
  "net/http"
  "io/ioutil"
  "strings"
)

func main() {
  url := "https://api.forge.tensorblock.co/v1/chat/completions"
  body := strings.NewReader(`{
    "model": "gpt-4o",
    "messages": [
      {
        "role": "user",
        "content": "Hello!"
      }
    ]
  }`)
  req, _ := http.NewRequest("POST", url, body)
  req.Header.Add("Content-Type", "application/json")
  res, _ := http.DefaultClient.Do(req)
  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(res)
  fmt.Println(string(body))
}
```