package chats

import "net/http"

func RegisterRoutes() {
	http.HandleFunc("/chats", func(w http.ResponseWriter, req *http.Request) {
		if req.Method != http.MethodPost {
			w.WriteHeader(http.StatusMethodNotAllowed)
			w.Write([]byte("Only POST method is allowed"))
			return
		}

		code, body := Create(req)
		w.WriteHeader(code)
		w.Write([]byte(body))
	})
}
