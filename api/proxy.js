export default async function handler(req, res) {
  try {
    // Forward request to your InfinityFree PHP backend
    const response = await fetch("ledgerpro.free.nf/sign_up.php", {
      method: req.method,
      headers: {
        "Content-Type": req.headers["content-type"] || "application/x-www-form-urlencoded"
      },
      body: req.method === "POST" ? req.body : undefined
    });

    const text = await response.text();

    // Send the PHP server’s response back to the browser
    res.status(response.status).send(text);
  } catch (err) {
    console.error(err);
    res.status(500).send("Proxy error: " + err.message);
  }
}
