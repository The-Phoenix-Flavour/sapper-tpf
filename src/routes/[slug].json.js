import { getPost } from './_posts.js';


const lookup = new Map();
/*posts.forEach(post => {
	lookup.set(post.slug, JSON.stringify(post));
});*/

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	// Added All
	if (process.env.NODE_ENV !== 'production' || !lookup.has(slug)) {
		const post = getPost(slug);
		lookup.set(slug, JSON.stringify(post));
	}

	const json = lookup.get(slug);

	if (json) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(json);
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}


	/*
	if (lookup.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
	*/
}
