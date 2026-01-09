import { TrendingUp, Search, Globe, Smartphone, Code, Megaphone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import analytics from '../lib/mixpanel';

const services = [
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to boost your online presence and drive conversions.',
    features: ['Social Media Marketing', 'Content Marketing', 'Email Campaigns', 'PPC Advertising'],
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Search,
    title: 'SEO Services',
    description: 'Data-driven SEO strategies to improve your search rankings and increase organic traffic.',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building'],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
    features: ['Responsive Design', 'E-commerce Solutions', 'CMS Development', 'Web Apps'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Smartphone,
    title: 'Android Development',
    description: 'Native Android applications tailored to your business needs with seamless performance.',
    features: ['Native Apps', 'UI/UX Design', 'API Integration', 'Play Store Deployment'],
    color: 'from-green-600 to-lime-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: Code,
    title: 'iOS Development',
    description: 'Elegant iOS applications that deliver exceptional user experiences on Apple devices.',
    features: ['Native iOS Apps', 'Swift Development', 'App Store Optimization', 'iOS UI/UX'],
    color: 'from-slate-600 to-gray-700',
    bgColor: 'bg-slate-50',
  },
  {
    icon: TrendingUp,
    title: 'IT Consulting',
    description: 'Strategic IT consulting to help you leverage technology for business growth and efficiency.',
    features: ['Technology Strategy', 'Digital Transformation', 'Cloud Solutions', 'IT Infrastructure'],
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50',
  },
];

export default function Services() {
  const [visibleServices, setVisibleServices] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleServices((prev) => new Set(prev).add(index));
            const serviceName = entry.target.getAttribute('data-service');
            if (serviceName) {
              analytics.trackServiceView(serviceName);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.service-card');
    elements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      elements.forEach((el) => {
        if (observerRef.current) {
          observerRef.current.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business and drive measurable results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleServices.has(index);

            return (
              <div
                key={index}
                data-index={index}
                data-service={service.title}
                className={`service-card group ${service.bgColor} rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-700">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-br ${service.color} rounded-full`}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
