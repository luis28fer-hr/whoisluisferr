// JavaScript: Función para enviar el mensaje
function enviarMensaje() {
    // Número de teléfono de WhatsApp en formato internacional (sin +)
    const phoneNumber = '+524481164569'; // Cambia este número por el tuyo
    // Mensaje que quieres que se envíe automáticamente
    const message = `¡Hola! ✨\n\nAcabo de ver tu portafolio web 💻.\n\Me encantaría poder hablar contigo, sobre algo que me interesa, sobre tus servicios. 🌟`;

    // Codificamos el mensaje para que sea parte de la URL
    const encodedMessage = encodeURIComponent(message);

    // Construimos la URL de WhatsApp con el número y el mensaje codificado
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}
