import React, { useState } from 'react';

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: 'What is StyleMe?',
      answer: 'StyleMe is an innovative platform that allows users to design their own clothing. You can customize every detail, from fabric and color to size and style, and see a 3D realistic visualization of your design before buying it.',
    },
    {
      question: 'How does StyleMe work?',
      answer: 'Our platform uses cutting-edge 3D modeling technology to bring your design to life. Simply choose a garment, customize it to your liking, and preview the results in real-time.',
    },
    {
      question: 'Do I need any design experience to use StyleMe?',
      answer: 'No design experience is needed! Our intuitive interface makes it easy for anyone to create custom clothing. We provide helpful tools and templates to guide you through the process.',
    },
    {
      question: 'Can I upload my own photo to use as a model?',
      answer: 'Yes, you can upload your own photo to use as a model. This allows you to see how the clothing will look on your specific body type.',
    },
    {
      question: 'What kinds of customization options are available?',
      answer: 'We offer a wide range of customization options, including fabric selection, color palettes, size adjustments, sleeve styles, neckline variations, and more.',
    },
    {
      question: "Can I make adjustments to my design after it's generated?",
      answer: 'Yes, you can make adjustments to your design at any time before placing your order. Our platform allows you to easily modify your creations until you are completely satisfied.',
    },
    {
      question: 'Is my personal information secure?',
      answer: 'Yes, your personal information is secure with us. We use industry-standard security measures to protect your data and ensure your privacy.',
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-8">Frequently asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-600 rounded-lg p-4 cursor-pointer">
            <div className="flex justify-between items-center" onClick={() => toggleQuestion(index)}>
              <h3 className="font-medium">{faq.question}</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transition-transform duration-300 ${openQuestion === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {openQuestion === index && (
              <div className="mt-4 pt-4 border-t border-gray-500 transition-opacity duration-300">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactSection = () => (
  <div className="mt-16">
    <h2 className="text-3xl font-bold mb-8 text-center">Contact Our Friendly Team</h2>
    <p className="text-lg text-gray-400 mb-12 text-center">Let us know how we can help.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { title: 'Chat to sales', email: 'sales@styleme.com' },
        { title: 'Chat to support', email: 'support@styleme.com' },
        { title: 'Visit Us', text: 'Visit on Google Maps' },
        { title: 'Call Us', text: '+1(234)567890' },
      ].map((contact, index) => (
        <div key={index} className="border border-gray-600 rounded-lg p-6 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mx-auto mb-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c-4.97 0-9-3.694-9-8.25s4.03-8.25 9-8.25 9 3.694 9 8.25-4.03 8.25-9 8.25Z"
            />
          </svg>
          <p className="mt-2">{contact.title}</p>
          {contact.email && <p className="text-gray-400 text-sm">{contact.email}</p>}
          {contact.text && <p className="text-gray-400 text-sm">{contact.text}</p>}
        </div>
      ))}
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-900 py-8 px-8 mt-16">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center w-full">
      <div className="flex items-center mb-4 md:mb-0">
        <div className="text-2xl font-bold mr-4">STYLEME</div>
        <p className="text-xs text-gray-500">Copyright @ 2023 StyleMe</p>
      </div>
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 mb-4 md:mb-0">
        <div>
          <h4 className="font-bold text-gray-300 mb-2">About Us</h4>
          <ul className="text-gray-500 text-sm space-y-1">
            <li>Mission</li>
            <li>Team</li>
            <li>Newsletter</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-300 mb-2">Quick Links</h4>
          <ul className="text-gray-500 text-sm space-y-1">
            <li>Design</li>
            <li>FAQ</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-300 mb-2">Support</h4>
          <ul className="text-gray-500 text-sm space-y-1">
            <li>support@gmail.com</li>
            <li>+1(234)567890</li>
            <li>123 Fashion Ave. Style City</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row text-xs text-gray-500">
        <div>Terms of Service</div>
        <div>Back to Top</div>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen flex flex-col">
      <main className="container mx-auto px-8 py-16 flex-grow">
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;