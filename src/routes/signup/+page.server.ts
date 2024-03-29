import type { Action, Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import {PUBLIC_API_URL} from "$env/static/public";

const numSaltRound = 8;

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user.isLoggedIn) {
		throw redirect(302, '/main');
	}
};

const postSignUp = async (username: string, hashedPassword: string) => {
	const response = await fetch(PUBLIC_API_URL + '/auth/v1/register', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ email: username, passwd: hashedPassword })
	});
	if (response.headers.get('content-type')?.includes('application/json')) {
		const json = await response.json();
		return { response, json };
	} else {
		return { response };
	}
};

const signup: Action = async ({ request }) => {
	// get input field data
	const data = await request.formData();
	const username = data.get('username');
	const password = data.get('password');
	const password_repeat = data.get('password_repeat');

	// check input
	if (typeof username !== 'string' || typeof password !== 'string' || !username || !password || password != password_repeat) {
		return fail(400, { invalid: true, info: "Username or Password is undefined." });
	}

	const hashedPassword = await bcrypt.hash(password, numSaltRound);

	// create USER in DB
	const response = await postSignUp(username, hashedPassword);

	// error-handling:
	// - if user already exists - other error
	if (response.response.status >= 400 || !response.response.ok) {
		return fail(response.response.status, { user: true, info: response.json.text });
	}

	// everything is good -> redirect to login
	throw redirect(302, '/login');
};

export const actions: Actions = { signup };
