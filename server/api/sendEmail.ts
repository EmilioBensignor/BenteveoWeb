// server/api/sendEmail.js
import { createTransport } from 'nodemailer';

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);

        // Validar parámetros
        if (!body || !body.nombre || !body.email || !body.empresa) {
            throw createError({
                statusCode: 400,
                message: 'Faltan campos requeridos en el formulario'
            });
        }

        // Configurar transporte SMTP para DirectAdmin
        const transporter = createTransport({
            host: 'sunfire.mxrouting.net',
            port: 587,
            secure: false,
            auth: {
                user: 'hola@benteveo.com',
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Crear contenido HTML para el email
        const htmlContent = `
            <h2>Nuevo mensaje de contacto</h2>
            <p><strong>Nombre:</strong> ${body.nombre}</p>
            <p><strong>Empresa:</strong> ${body.empresa}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Mensaje:</strong> ${body.mensaje || 'No se proporcionó mensaje'}</p>
        `;

        // Enviar email
        const info = await transporter.sendMail({
            from: 'hola@benteveo.com',
            to: 'liobensignor@gmail.com',
            subject: `Nuevo mensaje de contacto - ${body.nombre} de ${body.empresa}`,
            text: `Nombre: ${body.nombre}\nEmpresa: ${body.empresa}\nEmail: ${body.email}\nMensaje: ${body.mensaje || 'No se proporcionó mensaje'}`,
            html: htmlContent,
        });

        console.log('Mensaje enviado: %s', info.messageId);

        return {
            status: 'success',
            message: 'Email enviado correctamente'
        };

    } catch (error) {
        console.error('Error al enviar email:', error);

        throw createError({
            statusCode: 500,
            message: `Error al enviar email`
        });
    }
});