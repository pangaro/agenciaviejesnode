import express from 'express';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViaje 
} from '../controllers/paginasController.js';

import { guardarTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

router.get( '/', paginaInicio ); 

router.get( '/nosotros', paginaNosotros );

router.get( '/viajes', paginaViajes );

//:comodin 
router.get( '/viajes/:cualquierValor', paginaDetalleViaje );

router.get( '/testimoniales', paginaTestimoniales );

router.post( '/testimoniales', guardarTestimonial);

export default router;
