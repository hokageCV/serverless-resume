import resumeData from './resume';

const corsHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET, OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type',
}

export default {
	async fetch(request, env, ctx) {
		const formatedResume = JSON.stringify(resumeData, null, 2)
		return new Response(formatedResume, {
			headers: {
				'Content-Type': 'application/json',
				...corsHeaders,
			}
		})
	},
};
