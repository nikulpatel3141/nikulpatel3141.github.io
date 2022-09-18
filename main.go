package main

import (
	"backend/models"
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	// "github.com/nikulpatel462/personal_website/models"
)

//type pageContent struct {
//	Title string `json:"title"`
//	Body  string `json:"body"`
//}

func defaultHandler(c *gin.Context) {
	c.HTML(http.StatusOK, "components/header.html", gin.H{"title": "Nikul Patel"})
	c.HTML(http.StatusOK, "pages/index.html", gin.H{"title": "Nikul Patel"})
}

func main() {
	db := models.GetDBConn()
	models.MakeMigrations(db)
	// defer db.()
	fmt.Println(os.Getwd())
	r := gin.Default()
	// Listen and Server in 0.0.0.0:8080
	r.LoadHTMLGlob("views/**/*.html")
	r.Static("/static", "./static/")

	r.GET("/", defaultHandler)

	r.Run("localhost:8080")
}
