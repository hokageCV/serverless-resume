import resumeData from './resume';

export default {
	async fetch(request, env, ctx) {
		const formatedResume = JSON.stringify(resumeData, null, 4)
		return new Response(formatedResume, {
			headers: {
				'Content-Type': 'application/json',
			}
		})
	},
};
