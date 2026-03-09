export const config = {
  matcher: '/:path*',
};

export default function middleware(request) {
  const basicAuth = request.headers.get('authorization');

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    if (user === 'sonal' && pwd === 'Revamphomepage@123') {
      // Allow request to proceed by proxying it to the origin
      return fetch(request);
    }
  }

  return new Response('Auth Required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}
