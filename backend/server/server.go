package server

import (
	"errors"
	"github.com/lortkipa/allai/backend/server/endpoints"
	"net/http"
)

func Start(port string) error {
	if port == "" {
		return errors.New("Port is not provided")
	}

	endpoints.SetupChats()

	err := http.ListenAndServe(":"+port, nil)
	return err
}
