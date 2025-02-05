addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Cloudflare sets the client IP in the "cf-connecting-ip" header.
  const ip = request.headers.get('cf-connecting-ip') || 'IP not found';
  
  return new Response(ip, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
