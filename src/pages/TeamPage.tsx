import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, ChevronRight } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    role: 'Founder',
    image: 'https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/avatar-dep-cho-nam-2.jpg',
    bio: 'Innovative leader with extensive experience in AI and software development, specializing in creating intelligent solutions.',
    socialLinks: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/',
    }
  },
  {
    id: 2,
    name: 'Nguyễn Văn B',
    role: 'Founder',
    image: 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/07/anh-avatar-dep-cho-con-gai-2.jpg',
    bio: 'Technology visionary with a track record of successfully launching and scaling innovative AI platforms.',
    socialLinks: {
      linkedin: 'https://linkedin.com/',
      github: 'https://github.com/',
    }
  },
  {
    id: 3,
    name: 'Nguyễn Văn C',
    role: 'CO Founder',
    image: 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223',
    bio: 'PhD in Computer Science with expertise in machine learning algorithms and natural language processing.',
    socialLinks: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/',
      github: 'https://github.com/',
    }
  },
  {
    id: 4,
    name: 'Nguyễn Văn D',
    role: 'AI Engineer',
    image: 'https://i.pinimg.com/236x/8f/33/30/8f3330d6163782b88b506d396f5d156f.jpg',
    bio: 'Expert in developing and optimizing AI models for customer service applications.',
    socialLinks: {
      linkedin: 'https://linkedin.com/',
      github: 'https://github.com/',
    }
  },
  {
    id: 5,
    name: 'Nguyễn Văn E',
    role: 'Backend Engineer',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsozZLtd4agoNCMrds_L35VGXmvI8qsLhMJQ&s',
    bio: 'Skilled backend developer specializing in scalable architectures and microservices.',
    socialLinks: {
      linkedin: 'https://linkedin.com/',
      github: 'https://github.com/',
    }
  },
  {
    id: 6,
    name: 'Nguyễn Văn F',
    role: 'Quality Control',
    image: 'https://i.pinimg.com/736x/b7/91/44/b79144e03dc4996ce319ff59118caf65.jpg',
    bio: 'Ensures the highest standards of quality in all of our products and services.',
    socialLinks: {
      linkedin: 'https://linkedin.com/',
    }
  },
  {
    id: 7,
    name: 'Nguyễn Văn G',
    role: 'Frontend Engineer',
    image: 'https://i.pinimg.com/736x/e7/af/0d/e7af0df6461d8814a34ac83d7bc58acc.jpg',
    bio: 'Creative frontend developer with expertise in building beautiful, responsive user interfaces.',
    socialLinks: {
      linkedin: 'https://linkedin.com/',
      github: 'https://github.com/',
    }
  }
];

const TeamPage: React.FC = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-40 left-0 w-40 h-40 bg-blue-50 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute top-60 right-10 w-60 h-60 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-indigo-50 rounded-full opacity-60 blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-20 pt-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold text-primary mb-6"
            >
              Meet our<br />
              <span className="relative">
                experts
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5C32 0.5 62 0.5 101 5.5C140 0.5 170 0.5 199 5.5" stroke="#0078FF" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </motion.h1>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center"
          >
            <div className="flex-grow border-t border-gray-300 mr-4"></div>
            <p className="text-lg text-gray-600 max-w-md">
              Meet the team that never gives up and always strives for excellence. Remove negativity from your thoughts.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.slice(0, 4).map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: member.id * 0.1 }}
              className="mb-10 group"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="rounded-full overflow-hidden aspect-square mb-4 relative mx-auto" style={{ width: '220px', height: '220px' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-theme to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end justify-center pb-6 z-10">
                  <div className="flex space-x-3">
                    {member.socialLinks?.linkedin && (
                      <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <Linkedin size={18} className="text-theme" />
                      </a>
                    )}
                    {member.socialLinks?.twitter && (
                      <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <Twitter size={18} className="text-theme" />
                      </a>
                    )}
                    {member.socialLinks?.github && (
                      <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <Github size={18} className="text-theme" />
                      </a>
                    )}
                  </div>
                </div>
                <motion.div
                  className="w-full h-full"
                  animate={{
                    scale: hoveredMember === member.id ? 1.08 : 1
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0078FF&color=fff&size=220`;
                    }}
                  />
                </motion.div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-primary group-hover:text-theme transition-colors">{member.name}</h3>
                <div className="relative">
                  <p className="text-gray-600 font-medium bg-gradient-to-r from-theme to-blue-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 absolute inset-0 transition-opacity duration-300 mx-auto text-center">{member.role}</p>
                  <p className="text-gray-600 group-hover:opacity-0 transition-opacity duration-300">{member.role}</p>
                </div>
                {member.bio && (
                  <div className="mt-2 h-0 overflow-hidden group-hover:h-auto group-hover:mt-2 transition-all duration-300 ease-in-out">
                    <p className="text-sm text-gray-500 max-w-[250px] mx-auto">{member.bio}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
          {teamMembers.slice(4).map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: member.id * 0.1 }}
              className="mb-10 group"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="rounded-full overflow-hidden aspect-square mb-4 relative mx-auto" style={{ width: '220px', height: '220px' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-theme to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end justify-center pb-6 z-10">
                  <div className="flex space-x-3">
                    {member.socialLinks?.linkedin && (
                      <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <Linkedin size={18} className="text-theme" />
                      </a>
                    )}
                    {member.socialLinks?.twitter && (
                      <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <Twitter size={18} className="text-theme" />
                      </a>
                    )}
                    {member.socialLinks?.github && (
                      <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <Github size={18} className="text-theme" />
                      </a>
                    )}
                  </div>
                </div>
                <motion.div
                  className="w-full h-full"
                  animate={{
                    scale: hoveredMember === member.id ? 1.08 : 1
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0078FF&color=fff&size=220`;
                    }}
                  />
                </motion.div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-primary group-hover:text-theme transition-colors">{member.name}</h3>
                <div className="relative">
                  <p className="text-gray-600 font-medium bg-gradient-to-r from-theme to-blue-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 absolute inset-0 transition-opacity duration-300 mx-auto text-center">{member.role}</p>
                  <p className="text-gray-600 group-hover:opacity-0 transition-opacity duration-300">{member.role}</p>
                </div>
                {member.bio && (
                  <div className="mt-2 h-0 overflow-hidden group-hover:h-auto group-hover:mt-2 transition-all duration-300 ease-in-out">
                    <p className="text-sm text-gray-500 max-w-[250px] mx-auto">{member.bio}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-28 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-60 h-60 bg-blue-100 rounded-full translate-x-1/2 -translate-y-1/2 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-100 rounded-full -translate-x-1/2 translate-y-1/2 opacity-50"></div>
          
          <div className="text-center relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-primary">
              Join With Us
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Let us help your business shape the future of AI. Upgrade your
              productivity and scale your business with HiliosAI Agent.
            </p>
            <Link
              to="/contact"
              className="bg-theme text-white font-medium px-8 py-3 rounded-lg inline-flex items-center hover:bg-blue-600 transition-colors group"
            >
              Contact Us
              <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamPage; 