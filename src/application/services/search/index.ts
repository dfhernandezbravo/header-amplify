import axios from "axios"

const searchService = {
    getPopularSearch: () => {
        return axios.get('/api/products/search/popular');
    }
}
export default searchService;