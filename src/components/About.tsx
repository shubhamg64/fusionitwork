import { Target, Users, Award, Zap } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We focus on delivering measurable results that impact your bottom line and drive business growth.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our experienced professionals bring years of industry expertise to every project we undertake.',
  },
  {
    icon: Award,
    title: 'Quality First',
    description: 'We maintain the highest standards of quality in every aspect of our work and client relationships.',
  },
  {
    icon: Zap,
    title: 'Agile Approach',
    description: 'Fast, flexible, and adaptive methodologies ensure timely delivery without compromising quality.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Fusiin IT Works?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are a team of passionate innovators dedicated to transforming businesses through technology.
              Our holistic approach combines creativity, technical expertise, and strategic thinking to deliver
              solutions that exceed expectations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From startups to established enterprises, we partner with businesses of all sizes to create
              digital experiences that resonate with their audience and drive sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help you achieve your digital goals
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg hover:scale-105"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
}
