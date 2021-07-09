import axios from 'axios';

const ADD_PROPERTY_REST_API_URL='http://localhost:8080/api/postProperty';
const ADD_HOSTEL_REST_API_URL='http://localhost:8080/api/postHostel';

export const GET_HOSTEL_REST_API_URL= 'http://localhost:8080/api/getHostel?page=1&limit=4';
export const GET_ROOM_REST_API_URL= 'http://localhost:8080/api/getProperty?limit=4';
export const GET_HOSTEL_REST_API_WITH_ID_URL= 'http://localhost:8080/api/getHostel/${id}';
export const GET_RENT_REST_API_WITH_ID_URL='http://localhost:8080/api/getProperty/${id}';


class AddPropertyService{

    savePropertyDetails(propertyDetails){
        return axios.post(ADD_PROPERTY_REST_API_URL,propertyDetails);
    }
    saveHostelDetails(hostelDetails){
        return axios.post(ADD_HOSTEL_REST_API_URL, hostelDetails);
    }

   
    
}
export default new AddPropertyService();

