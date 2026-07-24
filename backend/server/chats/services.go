package chats

import "net/http"

func Create(req *http.Request) (int, string) {
	return http.StatusCreated, "Hello World"
}
