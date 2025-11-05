import { Flame, Heart, Award } from 'lucide-react';

function About() {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Pasión por las Pizzas
            </h2>
            <p className="text-lg text-gray-600">
              Desde 2020, hemos estado sirviendo las pizzas más deliciosas
              de la ciudad. Nuestra misión es simple: crear experiencias
              inolvidables con cada bocado.
            </p>
            <p className="text-lg text-gray-600">
              Usamos solo ingredientes 100% frescos, mozzarella importada, y
              nuestras masas artesanales horneadas en horno de leña cada día.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Flame className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Ingredientes Premium
                </h3>
                <p className="text-gray-600">
                  Mozzarella importada, tomates frescos y especias italianas
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Horno de Leña
                </h3>
                <p className="text-gray-600">
                  Pizzas cocidas al horno tradicional a 350°C
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Award className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Calidad Garantizada
                </h3>
                <p className="text-gray-600">
                  Premiados como la mejor pizzería 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;