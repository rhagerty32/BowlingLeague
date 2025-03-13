import axios from "axios";

const API_URL = "http://localhost:5190/api/bowler";

export const getBowlers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching bowlers", error);
        return [];
    }
};