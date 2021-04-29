import axios from 'axios';

const ADD_PROPERTY_REST_API_URL='http://localhost:8080/api/postProperty';
// const ADD_LOCALITY_REST_API_URL='http://localhost:8080/api/locality';
// const ADD_RENTAL_REST_API_URL='http://localhost:8080/api/rental';
// const ADD_AMENITIES_REST_API_URL='http://localhost:8080/api/amenities';
// const ADD_PROPERTY_REST_API_URL='http://localhost:8080/swagger-ui.html';

class AddPropertyService{

    savePropertyDetails(propertyDetails){
        return axios.post(ADD_PROPERTY_REST_API_URL,propertyDetails);
    }
    // saveLocalityDetails(localityDetails){
    //     return axios.post(ADD_LOCALITY_REST_API_URL,localityDetails);
    // }
    // saveRentalDetails(rentalDetails){
    //     return axios.post(ADD_RENTAL_REST_API_URL,rentalDetails);
    // }
    // saveAmenDetails(amenDetails){
    //     return axios.post(ADD_AMENITIES_REST_API_URL,amenDetails);
    // }
}
export default new AddPropertyService();

