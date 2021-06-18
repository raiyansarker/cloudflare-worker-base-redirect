addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) { 
  const {hostname, pathname, search} = new URL(request.url)

  const host = 'www.example.com'
  const base = 'https://example.com'
  
  const destination = base + pathname + search

  if (hostname === host) {
    return Response.redirect(destination, 301)
  } else {
    return new Response(JSON.stringify({message: `What are you doing here, bro?`}), {
      headers: {
        'Content-Type': 'application/json'
      },
      status: 502
    })
  }
}
