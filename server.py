from http.server import SimpleHTTPRequestHandler, HTTPServer

class CustomHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        if self.path.endswith(".json"):
            self.send_header("Content-Type", "application/json")
        super().end_headers()

PORT = 5500
with HTTPServer(("localhost", PORT), CustomHandler) as httpd:
    print(f"Serving on http://localhost:{PORT}")
    httpd.serve_forever()
