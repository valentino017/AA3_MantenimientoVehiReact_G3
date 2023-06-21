export function Numbers(event) {
    const keyCode = event.keyCode || event.which;

    if (keyCode < 48 || keyCode > 57) {
        event.preventDefault();
    }
}