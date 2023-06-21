import axios from "axios";

const VEHICULO_API_URL = "http://localhost:8888/api/vehiculo";

class VehiculoService {

    //** Vehiulos

    getAllVehiculos() {
        return axios.get(VEHICULO_API_URL);
    }

    createVehiculo(vehiculo) {
        return axios.post(VEHICULO_API_URL, vehiculo);
    }

    getVehiculoById(id_vehiculo) {
        return axios.get(VEHICULO_API_URL + '/' + id_vehiculo);
    }

    updateVehiculo(id_vehiculo, vehiculo) {
        return axios.put(VEHICULO_API_URL + '/' + id_vehiculo, vehiculo);
    }

    deleteVehiculo(id_vehiculo) {
        return axios.delete(VEHICULO_API_URL + '/' + id_vehiculo);
    }
}

export default new VehiculoService();