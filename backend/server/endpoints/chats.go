package endpoints

import "net/http"

func SetupChats() {
	http.HandleFunc("/chats", func(w http.ResponseWriter, req *http.Request) {
		if req.Method != http.MethodGet {
			w.WriteHeader(http.StatusMethodNotAllowed)
			w.Write([]byte("Only GET method is allowed"))
			return
		}

		code, body := create(w, req)
		w.WriteHeader(code)
		w.Write([]byte(body))
	})
}

func create(w http.ResponseWriter, req *http.Request) (int, string) {
	return http.StatusCreated, "Hello World"
}
