import { Mail, Phone, MapPin, Github, Linkedin, Send, Facebook } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [sending, setSending] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          'service_q8y79jn',
          'template_7y4x0vq',
          formRef.current,
          '6vhygQ499Kzrohv5c'
        );
        toast.success('Message sent successfully!');
        formRef.current.reset();
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
    } finally {
      setSending(false);
    }
  };

  const contactMethods = [
    {
      Icon: Mail,
      title: 'Email',
      value: 'sandeshacharya471@gmail.com',
      href: 'mailto:sandeshacharya471@gmail.com',
      color: 'from-blue-600 to-blue-700',
    },
    {
      Icon: Phone,
      title: 'Phone',
      value: '+977 9862904097',
      href: 'tel:+9779862904097',
      color: 'from-indigo-600 to-indigo-700',
    },
    {
      Icon: MapPin,
      title: 'Location',
      value: 'Thakanpokhari, Nepal',
      href: 'https://www.google.com/maps/place/thakanpokhari/@28.346392,83.5430386,730m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3996079ccd08f807:0x64ab7d6c52394c1e!8m2!3d28.3463873!4d83.5456135!16s%2Fg%2F11h0b_zcj3?entry=ttu',
      color: 'from-purple-600 to-purple-700',
    },
  ];

  const socialLinks = [
    { Icon: Facebook, href: 'https://www.facebook.com/sandesh.acharya.5201', color: 'text-blue-600 hover:text-blue-700' },
    { Icon: Github, href: 'https://github.com/sandeshacharya2', color: 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/sandesh-acharya-a1a0b1256/', color: 'text-blue-600 hover:text-blue-700' },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20  bg-theme transition-colors duration-300 relative overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-10 right-10 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl text-center mb-4 text-theme"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-12"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-theme text-center mb-12 max-w-2xl mx-auto"
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
            Feel free to reach out!
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.title === 'Location' ? '_blank' : undefined}
                rel={method.title === 'Location' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 50, rotateY: -90 }}
                animate={isVisible ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + index * 0.2,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                }}
                whileTap={{ scale: 0.95 }}
                className="text-center p-6 bg-form rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center shadow-lg`}
                >
                  <method.Icon size={28} className="text-white" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className="text-lg mb-2 text-theme"
                >
                  {method.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ delay: 1 + index * 0.2 }}
                  className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                >
                  {method.value}
                </motion.p>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-form  rounded-lg shadow-lg p-8 mb-8 transition-colors duration-300"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <motion.div whileHover={{ scale: 1.02 }}>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-input textarea-theme placeholder-theme border border-theme focus:ring-2 focus:ring-primary outline-none transition-all"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-input textarea-theme placeholder-theme  border border-theme focus:ring-2 focus:ring-primary outline-none transition-all"
                />
              </motion.div>
            </div>
            <motion.div whileHover={{ scale: 1.01 }} className="mb-6">
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-input textarea-theme placeholder-theme  border border-theme focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
              />
            </motion.div>
            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-lg font-medium shadow-lg hover:shadow-2xl transition-all inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{sending ? 'Sending...' : 'Send Message'}</span>
              {!sending && (
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Send size={20} />
                </motion.div>
              )}
            </motion.button>
          </motion.form>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex items-center justify-center gap-4"
            >
              {socialLinks.map(({ Icon, href, color }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: 1.6 + index * 0.1,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 bg-white dark:bg-gray-800 green:bg-green-800 red:bg-red-800 black:bg-gray-800 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 ${color}`}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
