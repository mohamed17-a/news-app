import axios from "axios";
export async function getSports(){
    let url = 'https://newsapi.org/v2/everything?q=football&from=2024-06-30&sortBy=publishedAt&apiKey=06f38e0ffec6484399ff33fa8202a50a' ;
    return await axios.get(url);
}