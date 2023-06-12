import axios from "axios"

const searchService = {
    getPopularSearch: async () => {
        const response = await axios.get('/api/products/search/popular');
        return response?.data;
    }
}
export default searchService;