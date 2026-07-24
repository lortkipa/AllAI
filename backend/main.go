package main

import (
	"fmt"

	"github.com/lortkipa/allai/backend/server"
	"github.com/lortkipa/allai/backend/server/chats"
)

func main() {
	chats.RegisterRoutes()

	err := server.Start("8080")
	if err != nil {
		fmt.Println(err)
	}
}
