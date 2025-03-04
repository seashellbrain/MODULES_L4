const axios = require("axios");

const fetchData = async (url) => {
    try {
        let response = { data: [], isLoading: true, error: null };
        const { data } = await axios.get(url);
        response.data = data;
        response.isLoading = false;
        return response;
    } catch (error) {
        return { data: [], isLoading: false, error: error.message };
    }
};

module.exports = fetchData;
