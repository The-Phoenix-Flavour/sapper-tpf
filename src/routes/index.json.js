import { getPosts } from './_posts.js';

/*
const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		slug: post.slug
	};
}));
*/

let contents

export function get(req, res) {
	// Added
	if (!contents || process.env.NODE_ENV !== 'production') {
		const posts = getPosts().map(post => ({
			title: post.metadata.title,
			slug: post.slug,
			image: post.metadata.image
		}));

		contents = JSON.stringify(posts);
	}


	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}