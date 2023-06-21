export const validateForm = (modelo, estado, nroMatricula, id_cliente, color) => {
    let isValid = true;
    const newErrors = {
        modelo: '',
        estado: '',
        nroMatricula: '',
        id_cliente: '',
        color: ''
    };

    if (modelo.trim() === '') {
        newErrors.modelo = 'Ingrese un modelo';
        isValid = false;
    } else if (modelo.length > 15) {
        newErrors.modelo = 'El modelo debe tener máximo 15 caracteres';
        isValid = false;
    }
    if (estado.trim() === '') {
        newErrors.estado = 'Ingrese un estado';
        isValid = false;
    } else if (estado.length > 15) {
        newErrors.estado = 'El estado debe tener máximo 15 caracteres';
        isValid = false;
    }
    if (nroMatricula.trim() === '') {
        newErrors.nroMatricula = 'Ingrese un nroMatricula';
        isValid = false;
    } else if (nroMatricula.length !== 6) {
        newErrors.nroMatricula = 'El nroMatricula debe tener 6 dígitos';
        isValid = false;
    }
    if (id_cliente.length === 0) {
        newErrors.id_cliente = 'Ingrese un Id';
        isValid = false;
    }
    if (color.trim() === '') {
        newErrors.color = 'Ingrese un color';
        isValid = false;
    } else if (color.length > 15) {
        newErrors.color = 'El color debe tener máximo 15 caracteres';
        isValid = false;
    }


    return {
        isValid: isValid,
        errors: newErrors
    };
};
