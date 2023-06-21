export const validateForm = (nombre, apellido, telefono, correo, direccion) => {
    let isValid = true;
    const newErrors = {
        nombre: '',
        apellido: '',
        telefono: '',
        correo: '',
        direccion: ''
    };

    if (nombre.trim() === '') {
        newErrors.nombre = 'Ingrese un nombre';
        isValid = false;
    } else if (nombre.length > 25) {
        newErrors.nombre = 'El nombre debe tener máximo 25 caracteres';
        isValid = false;
    }
    if (apellido.trim() === '') {
        newErrors.apellido = 'Ingrese un apellido';
        isValid = false;
    } else if (apellido.length > 20) {
        newErrors.apellido = 'El apellido debe tener máximo 20 caracteres';
        isValid = false;
    }
    if (telefono.trim() === '') {
        newErrors.telefono = 'Ingrese un teléfono';
        isValid = false;
    } else if (telefono.length !== 9) {
        newErrors.telefono = 'El teléfono debe tener 9 dígitos';
        isValid = false;
    }
    if (correo.trim() === '') {
        newErrors.correo = 'Ingrese un correo';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
        newErrors.correo = 'Ingrese un correo válido';
        isValid = false;
    }
    if (direccion.trim() === '') {
        newErrors.direccion = 'Ingrese una dirección';
        isValid = false;
    } else if (direccion.length > 55) {
        newErrors.direccion = 'La dirección debe tener máximo 55 caracteres';
        isValid = false;
    }

    return {
        isValid: isValid,
        errors: newErrors
    };
};
