
let myAuthApi = "AIzaSyC6xFIkBYryC0N1jUm9HncB4isWDDt1qiU"
export let youtubeApi ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=IN&key="+myAuthApi;
export let searchSuggestions ="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const VideoSuggestionurl = 'https://youtube-v31.p.rapidapi.com/';
export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3654276306msh46c88cb8b24058ap1956e0jsn36e9da4f74f5',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};