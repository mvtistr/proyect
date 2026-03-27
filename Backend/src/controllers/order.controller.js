const orderModel = require('../models/order.model.js');
const { validateOrder, validateStatusChange } = require('../validators/order.validator.js');

const getOrders = async (req, res) => {
    try {
        const orders = await orderModel.getOrders();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createOrder = async (req, res) => {
    try{
        const order = await orderModel.createOrder(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateOrder = async (req, res) => {
    try {
        const currentOrder = await orderModel.getOrderById(req.params.id);
        if(!currentOrder){
            return res.status(404).json({ error: "Orden no encontrada" });
        }
        const errors = validateOrder(req.body);
        if(errors.length > 0){
            return res.status(400).json({ errors });
        }
        if(req.body.status){
            const statusError = validateStatusChange(
                currentOrder.status,
                req.body.status
            );
            if(statusError){
                return res.status(400).json({ error: statusError });
            }
        }
        const updated = await orderModel.updateOrder(req.params.id, req.body.status);
        return res.status(200).json(updated);
    } catch (error) {
        console.error("ERROR ORDER:", error);
        res.status(500).json({ error: "Error al actualizar orden" });
    }
};

const deleteOrder = async (req, res) => {
    try {
        if(req.user.role !== "admin"){
            return res.status(403).json({error: "No autorizado"});
        }
        const {id} = req.params; 
        const deleted = await orderModel.deleteOrder(id);
        if (!deleted) {
            return res.status(404).json({ error: 'Orden no encontrada' });
        }
        res.json(deleted);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getOrderDetails = async (req, res) => {
    try {
        const details = await orderModel.getOrderDetails(req.params.id);
        res.json(details);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder,
    getOrderDetails
};