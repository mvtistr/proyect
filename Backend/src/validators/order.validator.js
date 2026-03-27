const VALID_STATUS = [
    "en pedido",
    "en preparacion",
    "listo",
    "entregado"
];

const STATUS_FLOW = {
    "en pedido": "en preparacion",
    "en preparacion": "listo",
    "listo": "entregado",
    "entregado": null
};

const validateStatusChange = (currentStatus, newStatus) => {
    if(!newStatus) return null;
    const expectedNext = STATUS_FLOW[currentStatus];
    if(expectedNext !== newStatus){
        return `Cambio de estado invalido: ${currentStatus} => ${newStatus}`;
    }
    return null;
};

const validateOrder = (order) => {
    const errors = [];
    if(!order.email || order.email.trim() === ""){
        errors.push("El email es obligatorio");
    }
    if(!order.total_price || isNaN(order.total_price) || order.total_price <= 0){
        errors.push("El total debe ser un numero mayor a 0");
    }
    if(order.status && !VALID_STATUS.includes(order.status)){
        errors.push(`Estado invalido. Permitidos: ${VALID_STATUS.join(", ")}`);
    }
    if(order.order_date && isNaN(Date.parse(order.order_date))){
        errors.push("Fecha invalida");
    }
    return errors;
};

module.exports = {
    validateOrder,
    validateStatusChange,
    VALID_STATUS
};