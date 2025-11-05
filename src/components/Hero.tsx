function Hero() {
  return (
    <section id="inicio" className="pt-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Clarenz Trattoria
              <span className="text-red-600"> - Las Mejores Pizzas</span>
            </h1>
            <p className="text-xl text-gray-600">
              Pizzas italianas y peruanas con ingredientes frescos y de calidad.
              Descubre por qué somos los favoritos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#menu"
                className="px-8 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition text-center"
              >
                Ver Menú
              </a>
              <a
                href="#contacto"
                className="px-8 py-4 border-2 border-red-600 text-red-600 rounded-full font-semibold hover:bg-red-50 transition text-center"
              >
                Hacer Reserva
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pizza deliciosa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <p className="text-3xl font-bold text-red-600">1000+</p>
              <p className="text-gray-600">Clientes Satisfechos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
