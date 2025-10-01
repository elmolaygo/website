// Backend code for last.fm widget trackDetails function

import * as dotenv from "dotenv";

export async function handler(event, context) {
    // Only reload .env in local dev
    if (process.env.NETLIFY_LOCAL) {
        dotenv.config();
    }
    try {
        // Use env variables for apiKey
        const apiKey = process.env.LASTFM_API_KEY;
        const lastfmUsername = process.env.LASTFM_USERNAME;

        const apiUrl = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastfmUsername}&api_key=${apiKey}&format=json`;

        const res = await fetch(apiUrl);
        const data = await res.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        };
    } catch (error) {
        console.error("Error fetching last.fm data: " + error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch data" }),
        };
    }
}
