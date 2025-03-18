import { motion } from "framer-motion";

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    id: "feature-1",
    title: "Human-Quality AI Agents",
    description:
      "Deploy AI agents that communicate naturally and handle complex tasks with human-like understanding and flexibility.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
  },
  {
    id: "feature-2",
    title: "Operational Automation",
    description:
      "Streamline workflows and automate routine tasks with adaptable AI, reducing costs and freeing up your team for strategic work.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
        />
      </svg>
    ),
  },
  {
    id: "feature-3",
    title: "Enhanced Customer Experience",
    description:
      "Deliver personalized, responsive customer service across channels with AI agents that learn and improve over time.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
        />
      </svg>
    ),
  },
  {
    id: "feature-4",
    title: "Actionable Insights",
    description:
      "Extract valuable business intelligence from conversations and data, transforming interactions into actionable strategies.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
        />
      </svg>
    ),
  },
  {
    id: "feature-5",
    title: "Seamless Integration",
    description:
      "Easily integrate with your existing systems and tools for quick implementation and minimal disruption to operations.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 4.962-.358.655.655 0 0 0 .568-.66v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .31.26.557.57.531a48.564 48.564 0 0 0 5.064-.61 48.4 48.4 0 0 1-.353 4.285.66.66 0 0 1-.663.566v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.356 0 .658.283.659.64a47.549 47.549 0 0 1-.01 4.245c-.16.437-.496.792-.91 1.015-1.055.569-2.667 1.175-5.072 1.175-2.021 0-3.322-.412-4.145-.863-1.024-.562-1.562-.93-2.693-.93C10.203 21.75 9.66 22.114 8.623 22.681c-.767.417-1.967.786-3.764.786-1.851 0-3.122-.229-4.143-.676-.884-.386-1.453-.812-2.063-1.28-.349-.273-.632-.579-.899-.881-.212-.241-.379-.483-.519-.7-.258-.4-.435-.745-.575-1.068-.167-.385-.267-.803-.267-1.261 0-1.243.84-2.25 1.875-2.25.369 0 .713.128 1.003.349.283.215.604.401.959.401v0c.398 0 .736-.296.736-.697a48.621 48.621 0 0 1-.106-3.939c.008-.268.054-.538.131-.8.078-.262.182-.517.296-.764.286-.62.6-1.19.965-1.718.247-.354.49-.69.709-.998.324-.45.602-.819.83-1.145.075-.108.145-.208.205-.302.054-.079.088-.142.114-.195.158-.329.16-.721.007-1.046-.271-.568-.646-1.188-1.122-1.872-.301-.431-.557-.767-.711-.993-.175-.257-.297-.445-.358-.568-.201-.425-.121-.972.241-1.34.452-.458 1.06-.953 1.802-1.459.401-.273.817-.527 1.245-.765.647-.359 1.336-.721 2.027-1.041a189.61 189.61 0 0 1 2.111-.99c.343-.147.717-.215 1.089-.215.696 0 1.298.254 1.833.661.619.47 1.319 1.122 2.151 1.875.3.272.557.513.764.714.334.322.657.631.968.925.319.3.635.59.942.866.543.489 1.023.918 1.42 1.224.195.15.394.262.597.324.285.087.56.114.834.084.676-.077 1.313-.651 1.877-1.242.248-.259.472-.52.665-.78.161-.214.314-.434.455-.654.213-.327.413-.666.587-.99.177-.332.336-.67.476-1 .273-.642.568-1.324.886-1.999.318-.676.701-1.215 1.11-1.613.417-.4.871-.645 1.335-.786.471-.147.967-.206 1.447-.167.49.036.986.153 1.449.322.436.158.861.38 1.226.645.466.334.861.707 1.186 1.087.201.234.305.467.334.7.033.244.007.497-.08.74-.1.29-.252.574-.45.833-.202.263-.413.51-.633.738-.254.263-.546.576-.853.9-.65.69-1.414 1.58-2.017 2.361a.635.635 0 0 0-.129.432v0c0 .238.134.442.322.55.062.36.123.073.184.109.071.042.144.084.215.125.165.096.33.19.493.282.342.192.682.379 1.016.561.691.375 1.358.735 1.977 1.092.621.357 1.188.724 1.65 1.103.196.159.379.328.54.504.181.176.348.361.496.553.291.381.506.784.615 1.177.117.42.13.842.041 1.231-.088.395-.262.765-.498 1.108-.2.29-.43.56-.683.817a7.576 7.576 0 0 1-.911.81c-.314.244-.584.45-.838.633a14.68 14.68 0 0 1-.89.582c-.165.102-.324.197-.475.286-.158.092-.309.177-.452.258"
        />
      </svg>
    ),
  },
  {
    id: "feature-6",
    title: "Continuous Learning",
    description:
      "Our AI agents adapt and improve through continuous learning, staying effective as your business and customer needs evolve.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
  },
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="features"
      className="py-16 md:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Enterprise AI Agent for Modern Digital Change
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            We deliver next-generation AI solutions that create impactful
            digital experiences and transform customer service operations.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-5 text-primary-500">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 inline-flex items-center"
          >
            Get Started with HiliosAI
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
