import axios from '@/axios'



export const getStatus = () => {

    return axios
        .get("project_status")
        .then((response) => {
            return response.data.data
        })
        .catch(function (error) {
            console.log(error);
            return response.data.error
        });

}