```go
package main

import (
  "fmt"
  "net/http"
  "io/ioutil"
)

func main() {
  url := "https://api.forge.tensorblock.co/v1/models"

  req, _ := http.NewRequest("GET", url, nil)
  req.Header.Add("Authorization", "Bearer $FORGE_API_KEY")
  
  res, _ := http.DefaultClient.Do(req)
  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(res)
  fmt.Println(string(body))
}