const OCTANE_BASE_URI = "https://mqast001pngx.saas.hpe.com/";
const OCTANE_DEFECTS_URI = OCTANE_BASE_URI + "api/shared_spaces/222009/workspaces/1002/defects";

export class OctaneClient {

	fetchDefects() {
		fetch(OCTANE_DEFECTS_URI, {
			method : 'GET',
			headers : {
				"Accept" : "application/json",
			},
			mode : 'no-cors',
			credentials : 'include',
		}).then(response => {
			console.log("Response: " + response.status);
			return response.json();
		}).then(json => {
			console.log("parsed json" + json);
		}).catch(function(ex) {
			console.log('parsing failed', ex);
		});
	}
}