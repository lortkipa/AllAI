package main

import (
	"fmt"

	"github.com/lortkipa/allai/backend/server"
)

func main() {
	err := server.Start("8080")
	if err != nil {
		fmt.Println(err)
	}
}