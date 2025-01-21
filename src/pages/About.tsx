import { Award, Target, Users, UserCheck, ShieldCheck } from 'lucide-react';

export default function About() {
 
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
              <p className="text-xl max-w-2xl">
                A trusted name in security and facility services, proudly serving West Bengal for over 15 years
              </p>
            </div>
          </div>
        </div>
      </div>

     
      {/* Mission & Vision */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-justify text-lg">
              Our Mission is to give businesses and communities peace of mind by providing superior security and facility management services throughout West Bengal via commitment, professionalism, and consideration. By implementing cutting-edge tactics and the newest technologies, we are dedicated to continuously enhancing our offerings. Our objective is to establish enduring bonds with our clients based on dependability, trust, and mutual development while ensuring that everyone has access to operational effectiveness and safety. With the help of a group of knowledgeable and experienced experts, we concentrate on providing tailored solutions that change to meet the evolving demands of our clients. Furthermore, we are committed to cultivating a culture of ongoing expansion and sustainability, staying ahead of market trends while maintaining the highest moral standards. Our goal is to make a difference by putting safety, honesty, and customer pleasure first.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-justify text-lg">
              Our goal is to become West Bengal's most reputable and trusted supplier of facilities and security services, establishing new benchmarks for excellence, honesty, and client satisfaction. In our ideal future, every client will experience flawless operations and outstanding safety. By consistently enhancing our offerings, going above and above, and empowering our employees, we hope to become the industry leader. Our goal is to create a culture of excellence that encourages self-assurance and trust. Our goals are to provide creative solutions, improve service delivery, and establish safer, more secure settings by utilizing contemporary technology and industry best practices. We want to assist communities become stronger and more resilient by enabling everyone to have access to security and operational excellence through expansion and cooperation.
              </p>
            </div>
          </div>
        </div>
      </div>

        {/* Core Values */}
        <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <p className="mt-4 text-xl text-gray-600">
              Rooted in the heart of West Bengal, we operate with integrity and a strong sense of community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Integrity',
                description:
                  'Honesty and transparency guide all our actions, ensuring trust and reliability in every interaction.',
                icon: <ShieldCheck className="h-12 w-12 text-blue-600" />,
              },
              {
                title: 'Community Focus',
                description:
                  'We are dedicated to serving and uplifting our local communities with personalized and dependable services.',
                icon: <Users className="h-12 w-12 text-blue-600" />,
              },
              {
                title: 'Excellence',
                description:
                  'We strive for excellence in every aspect of our work, setting the standard for security services in West Bengal.',
                icon: <Award className="h-12 w-12 text-blue-600" />,
              },
              {
                title: 'Customer-Centric',
                description:
                  'Our clients are at the heart of everything we do. We tailor our services to meet their unique requirements and exceed their expectations.',
                icon: <UserCheck className="h-12 w-12 text-blue-600" />,
              },
              
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Leadership Team</h2>
            <p className="mt-4 text-xl text-gray-600">
              West Bengal-based professionals with a deep commitment to local service and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                position: 'CEO & Founder',
                image:
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
              },
              {
                name: 'Sarah Johnson',
                position: 'Operations Director',
                image:
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
              },
              {
                name: 'Michael Chen',
                position: 'Security Manager',
                image:
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover lazy-load"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

