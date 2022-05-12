import { useState, useEffect } from 'react';

export default function APIRequest(urlAPI) {
	const [isLoaded, setIsLoaded] = useState(false);
	const [isError, setIsError] = useState(undefined);
	const [apiData, setApiData] = useState(undefined);

	useEffect(() => {
		fetch(urlAPI)
			.then((res) => res.json())
			.then((json) => {
				setApiData(json);
				setIsLoaded(true);
			})
			.catch((err) => {
				setIsError(err.status);
			});
	}, []);

	return [isLoaded, isError, apiData];
}
