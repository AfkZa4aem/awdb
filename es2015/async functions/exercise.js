async function hasMostFollowers(...usernames){
	let baseUrl = `https://api.github.com/users/`;
	let urls = usernames.map(username => $.getJSON(baseurl + username));
	let result = await Promise.all(urls);
	let max = result.sort((a,b) => a.followers < b.followers)[0];
	return `${max.name} has the most followers with ${max.followers}`;
}

async function starWarsString(num){
	var str = '';
	let results = await $.getJSON(`https://swapi.com/api/people/${num}/`);
	str += `${results.name} is featured in `;
	let movies = results.films[0];
	let moreResults = await $.getJSON(movies);
	str += `${moreResults.title}, directed by ${moreResults.director} `;
	let planetData = moreResults.planets[0];
	let finalResult = await $.getJSON(planetData);
	str += `and it takes place on ${finalResult.name}`;
	return str;
}