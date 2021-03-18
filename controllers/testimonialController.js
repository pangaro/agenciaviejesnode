import { Testimonial } from '../models/testimoniales.js';

const guardarTestimonial = async (req, res) => {
    //console.log(req.body)

    //validar...
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if(nombre.trim() === '') {
        errores.push({ mensaje: 'El nombre está vacio' })
    }

    if(correo.trim() === '') {
        errores.push({ mensaje: 'El correo está vacio' })
    }

    if(mensaje.trim() === '') {
        errores.push({ mensaje: 'El mensaje está vacio' })
    }

    //console.log(errores)
    if(errores.length > 0) {
        
        //consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll();

        //mostrar la vista con errores

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    } else {
        //guardar en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            })
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    guardarTestimonial
}