package models

import (
	"gorm.io/driver/sqlite" // Sqlite driver based on GGO
	"gorm.io/gorm"
)

const DB_FILE = "content.db"

func GetDBConn() *gorm.DB {
	db, err := gorm.Open(sqlite.Open(DB_FILE), &gorm.Config{})

	if err != nil {
		panic("Unable to connect to the database")
	}
	return db
}

func MakeMigrations(db *gorm.DB) {
	db.AutoMigrate(&ResourcePost{}, &ResourceTopic{})
}
