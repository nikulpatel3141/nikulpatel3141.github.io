package models

import (
	"gorm.io/gorm"
)

type ResourceTopic struct {
	gorm.Model
	Title       string `json:"title"`
	Description string `json:"description"`
}

type ResourcePost struct {
	gorm.Model
	Title         string `json:"title"`
	ResourceTopic int
	// Links         []string `json:"links"`
	Content string `json:"content"`
}
