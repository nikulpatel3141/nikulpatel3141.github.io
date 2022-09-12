package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

//type pageContent struct {
//	Title string `json:"title"`
//	Body  string `json:"body"`
//}

func defaultHandler(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", gin.H{})
}

func main() {
	fmt.Println(os.Getwd())
	r := gin.Default()
	// Listen and Server in 0.0.0.0:8080
	r.LoadHTMLGlob("**/**/*.html")
	r.Static("/static", "./static/")

	r.GET("/", defaultHandler)

	r.Run("localhost:8080")
}
