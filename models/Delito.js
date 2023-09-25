const mongoose = require('mongoose');

const delitoSchema = new mongoose.Schema({
  tipoDelito: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  ubicacion: {
    type: {
      latitud: Number,
      longitud: Number,
    },
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    enum: ['resuelto', 'en curso', 'archivado'],
    default: 'en curso',
  },
  usuarioReporte: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },
  usuarioAsignado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
  },
});

const Delito = mongoose.model('Delito', delitoSchema);

module.exports = Delito;
