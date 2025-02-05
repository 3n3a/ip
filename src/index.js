export default {
	async fetch(request, env, ctx) {
		// Cloudflare sets the client IP in the "cf-connecting-ip" header.
		const ip = request.headers.get('cf-connecting-ip') || 'IP not found';

		return new Response(ip, {
		  headers: {
			  'Content-Type': 'text/plain',
			  'Access-Control-Allow-Methods': 'GET',
                          'Access-Control-Allow-Origin': '*'
		  }
		});
	},
};
