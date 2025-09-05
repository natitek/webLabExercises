export default async function handler(req, res) {
  try {
    let body;

    if (req.method === "POST") {
      // Ensure request body is properly serialized
      if (req.headers["content-type"]?.includes("application/json")) {
        body = JSON.stringify(req.body);
      } else {
        // Default to form-urlencoded
        body = new URLSearchParams(req.body).toString();
      }
    }

    const response = await fetch("ledgerpro.free.nf/sign_up.php", {
      method: req.method,
      headers: {
        "Content-Type": req.headers["content-type"] || "application/x-www-form-urlencoded"
      },
      body
    });

    const text = await response.text();
    res.status(response.status).send(text);
  } catch (err) {
    console.error(err);
    res.status(500).send("Proxy error: " + err.message);
  }
}
