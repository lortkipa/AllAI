package server

import (
	"errors"
	"net/http"
)

func Start(port string) error {
	if port == "" {
		return errors.New("Port is not provided")
	}

	err := http.ListenAndServe(":"+port, nil)
	return err
}
