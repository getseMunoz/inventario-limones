const express = require('express');
const app = express();
app.use(express.json());

let inventario = [
    { id: 1, tipo: 'Limón Persa Calidad Exportación', cantidad: 500, unidad: 'kg' },
    { id: 2, tipo: 'Limón Persa Segunda', cantidad: 300, unidad: 'kg' }
];

app.get('/api/limones', (req, res) => {
    res.json(inventario);
});

app.post('/api/limones', (req, res) => {
    const nuevoLote = {
        id: inventario.length + 1,
        tipo: req.body.tipo,
        cantidad: req.body.cantidad,
        unidad: 'kg'
    };
    inventario.push(nuevoLote);
    res.status(201).json(nuevoLote);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor de inventario corriendo en puerto ${PORT}`);
});