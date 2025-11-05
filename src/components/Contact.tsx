import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { useState, FormEvent } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    personas: '',
    comentarios: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo, enviar a una API o servicio de email
    console.log('Datos de reserva:', formData);
    
    // Mostrar mensaje de confirmación
    alert('¡Gracias por tu reserva! Te contactaremos pronto.');
    
    // Limpiar formulario
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      fecha: '',
      personas: '',
      comentarios: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visítanos
          </h2>
          <p className="text-xl text-gray-600">
            Estamos listos para servirte
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                <MapPin className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dirección</h3>
                <p className="text-gray-600">
                  📌 Jirón Nepeña 148 - Nuevo Chimbote<br />
                  📌 Plaza Santander - Chimbote
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                <Phone className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Teléfono</h3>
                <p className="text-gray-600">938 107 077<br />o<br />
                  929 300 157</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                <Mail className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Instagram</h3>
                <p className="text-gray-600">clarenztrattoria</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Horario</h3>
                <p className="text-gray-600">
                  Lunes - Viernes: 11:00 AM - 10:00 PM<br />
                  Sábado - Domingo: 12:00 PM - 11:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Haz tu Reserva
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Teléfono"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="datetime-local"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <select
                name="personas"
                value={formData.personas}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">Número de personas</option>
                <option value="1-2">1-2 personas</option>
                <option value="3-4">3-4 personas</option>
                <option value="5-6">5-6 personas</option>
                <option value="6+">Más de 6 personas</option>
              </select>
              <textarea
                name="comentarios"
                value={formData.comentarios}
                onChange={handleChange}
                placeholder="Comentarios adicionales"
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="w-full py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition"
              >
                Enviar Reserva
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
