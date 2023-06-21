export const validateForm = (id_cliente, id_sede, id_vehiculo, fechaIngreso, turno) => {
    let isValid = true;
    const newErrors = {
        id_cliente: '',
        id_sede: '',
        id_vehiculo: '',
        fechaIngreso: '',
        turno: ''

    };

    if (id_cliente.length === 0) {
        newErrors.id_cliente = 'Ingrese un id_cliente';
        isValid = false;
    }
    if (id_sede.length === 0) {
        newErrors.id_sede = 'Ingrese un id_sede';
        isValid = false;
    }
    if (id_vehiculo.length === 0) {
        newErrors.id_vehiculo = 'Ingrese un Id';
        isValid = false;
    }
    if (fechaIngreso.trim() === '') {
        newErrors.fechaIngreso = 'Ingrese un fechaIngreso';
        isValid = false;
    } else if (fechaIngreso.length !== 10) {
        newErrors.fechaIngreso = 'El fechaIngreso debe tener 10 dígitos';
        isValid = false;
    }
    if (turno.trim() === '') {
        newErrors.turno = 'Ingrese un turno';
        isValid = false;
    } else if (turno.length > 10) {
        newErrors.turno = 'El turno debe tener máximo 10 caracteres';
        isValid = false;
    }

    return {
        isValid: isValid,
        errors: newErrors
    };
};
