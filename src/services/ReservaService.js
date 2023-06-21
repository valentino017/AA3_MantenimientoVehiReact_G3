import axios from "axios";

const RESERVA_API_URL = "http://localhost:8888/api/reserva";

class ReservaService {

    getAllReservas() {
        return axios.get(RESERVA_API_URL);
    }

    createReserva(reserva) {
        return axios.post(RESERVA_API_URL, reserva);
    }

    getReservaById(reservaId) {
        return axios.get(RESERVA_API_URL + '/' + reservaId);
    }

    updateReserva(reservaId, reserva) {
        return axios.put(RESERVA_API_URL + '/' + reservaId, reserva);
    }

    deleteReserva(reservaId) {
        return axios.delete(RESERVA_API_URL + '/' + reservaId);
    }
}

export default new ReservaService();