import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Prompt from './Prompt.jsx';
import Fabric from './Fabric.jsx';
import GenderSelection from './GenderSelection.jsx';
import OwnModal from './OwnModal.jsx';

const features = [
  {
    title: "Design with Your Vision",
    component: <Prompt />,
    description: "Create unique designs using AI-powered prompts"
  },
  {
    title: "Fabric, Size & Color Customization",
    component: <Fabric />,
    description: "Customize every aspect of your garment"
  },
  {
    title: "Upload Your Own Models",
    component: <OwnModal />,
    description: "Use your personal photos for a better fit"
  },
  {
    title: "Gender Selection",
    component: <GenderSelection />,
    description: "Tailored designs for all preferences"
  }
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className='relative border-t border-white/[0.08] bg-black'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <h2 className='text-center text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16 tracking-tight'>
          Features
        </h2>

        <div className='flex flex-col md:flex-row gap-10 min-h-[600px]'>
          {/* Features List */}
          <div className='w-full md:w-1/2'>
            <ul className='space-y-2'>
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeFeature === index 
                      ? 'bg-white/[0.03] text-white' 
                      : 'text-white/60 hover:text-white/90'
                  }`}
                  onHoverStart={() => setActiveFeature(index)}
                >
                  <div className='relative z-10'>
                    <h3 className='text-xl md:text-2xl font-medium mb-2'>
                      {feature.title}
                    </h3>
                    <p className='text-sm text-white/40'>
                      {feature.description}
                    </p>
                  </div>
                  
                  {activeFeature === index && (
                    <motion.div
                      layoutId="activeFeature"
                      className="absolute inset-0 bg-white/[0.03] rounded-xl"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35
                      }}
                    />
                  )}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Feature Preview */}
          <div className='w-full md:w-1/2 relative'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                {features[activeFeature].component}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;