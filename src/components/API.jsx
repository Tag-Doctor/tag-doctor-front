const API_ENDPOINT = '/gemini/chat';

const fetchData = async (endpoint, options) => {
    try {
      const response = await fetch(endpoint, options);
      if (!response.ok) {
        console.error('HTTP error', response.status, response.statusText);
        throw new Error(`HTTP error status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  };

export const postData = async (data) => {
  return fetchData(`${API_ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const getData = async () => {
  return fetchData(`${API_ENDPOINT}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
