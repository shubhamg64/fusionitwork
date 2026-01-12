import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect } from 'react';
import analytics from '../lib/mixpanel';

export default function Hero() {
  useEffect(() => {
    analytics.trackPageView('Home');
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      analytics.trackButtonClick('Get Started', 'Hero');
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      analytics.trackButtonClick('Explore Services', 'Hero');
    }
  };

  return (
    <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              <Sparkles size={18} />
              <span className="text-sm font-medium">Digital Innovation Experts</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Fusion IT Works
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              We deliver cutting-edge digital marketing, SEO optimization, and comprehensive IT solutions to help your business thrive in the digital age.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105 flex items-center justify-center space-x-2 shadow-lg shadow-blue-600/30"
              >
                <span className="font-semibold">Get Started</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={scrollToServices}
                className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all flex items-center justify-center space-x-2"
              >
                <span className="font-semibold">Explore Services</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600 mt-1">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">30+</div>
                <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600 mt-1">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl opacity-10 absolute inset-0 blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                  D
                </div>
                <div className="flex-1">
                  <div className="h-3 bg-blue-200 rounded w-3/4 mb-2"></div>
                  <div className="h-2 bg-blue-100 rounded w-1/2"></div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-cyan-50 rounded-xl">
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="flex-1">
                  <div className="h-3 bg-cyan-200 rounded w-2/3 mb-2"></div>
                  <div className="h-2 bg-cyan-100 rounded w-1/2"></div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">
                  W
                </div>
                <div className="flex-1">
                  <div className="h-3 bg-green-200 rounded w-5/6 mb-2"></div>
                  <div className="h-2 bg-green-100 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
