import * as v from 'valibot';
import { error, redirect } from '@sveltejs/kit';
import { form } from '$app/server';

const API_ENDPOINT = 'https://zero.cycocyan.xyz/webhook/chatter';
const API_TOKEN = 'CRAPPYBUTREALLYBRUTALTOKYO';

export const chat = form(v.object({ message: v.string() }), async ({ message }) => {
	const request = { message, timestamp: new Date(), sessionId: '12345' };

	try {
		const response = await fetch('https://zero.cycocyan.xyz/webhook/chatter', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${API_TOKEN}`,
				Accept: '*/*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(request)
		});

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		return await response.json();
	} catch (err) {
		console.error('Error:', err instanceof Error ? err.message : String(err));
		return { error: err instanceof Error ? err.message : String(err) };
	}
});
