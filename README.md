# Serverless Resume

## Overview

This is a Cloudflare Workers API which serves resume data in JSON format to clients making HTTP requests.

## Usage

To retrieve the resume data, send a `GET` request to the API endpoint. The API will respond with a JSON object containing the resume details.

### API Endpoint

https://serverless-resume.chaitanyavaru.workers.dev

## Customization

You can customize the resume data by editing the resumeData object in the resume.js file. Modify the values to match your personal resume information.

## Deployment

1. Set up a Cloudflare Workers account
2. Install wrangler CLI
3. Clone this repository
4. Make changes to the resume.js file
5. Run `wrangler deploy` to deploy the API
