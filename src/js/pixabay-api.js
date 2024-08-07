export function searchImages(query) {
  const URL = 'https://pixabay.com/api/';
  const API_KEY = '45326372-cb2430b3eb7244718740f39d3';
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'false',
  });

  return fetch(`${URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
