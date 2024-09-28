'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from './Button';
import { Card, CardContent } from './Card';

import data from '../data/data';

export default function PersonalSite() {
  const [activeSection, setActiveSection] = useState('haqqında');

  const menuItems = ['Haqqında', 'Təcrübə', 'Təhsil', 'Bacarıqlar', 'Sertifikatlar', 'Əlaqə'];

  return (
    <div className="min-h-screen p-4 text-gray-300 select-none bg-gradient-to-br from-gray-900 via-black to-gray-800 sm:p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto overflow-hidden shadow-2xl bg-gray-900/70 backdrop-blur-xl rounded-3xl">
        <header className="relative p-8 overflow-hidden text-center">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}>
            <h1 className="mb-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
              {data?.generalInfo?.main?.name}
            </h1>
            <h2 className="text-3xl text-gray-400">{data?.generalInfo?.main?.position}</h2>
          </motion.div>
          <motion.div
            className="absolute inset-0 -z-10"
            animate={{
              backgroundImage: [
                'radial-gradient(circle, rgba(75,75,75,0.2) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(100,100,100,0.2) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(125,125,125,0.2) 0%, transparent 70%)',
              ],
            }}
            transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
          />
        </header>

        <nav className="p-4 bg-black/80">
          <ul className="flex flex-wrap justify-center gap-4">
            {menuItems?.map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={activeSection === item.toLowerCase() ? 'secondary' : 'ghost'}
                  onClick={() => setActiveSection(item.toLowerCase())}>
                  {item}
                </Button>
              </motion.li>
            ))}
          </ul>
        </nav>

        <main className="p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}>
              {activeSection === 'haqqında' && (
                <section>
                  <h3 className="mb-6 text-3xl font-bold text-gray-300">Haqqında</h3>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {Object.entries(data?.generalInfo?.secondary)?.map(([key, value]) => (
                      <Card key={key}>
                        <CardContent className="flex items-center justify-start space-x-4">
                          {React.createElement(value?.icon, {
                            className: 'text-gray-400 text-lg',
                          })}
                          <span className="text-lg">{value?.title}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              )}

              {activeSection === 'təcrübə' && (
                <section>
                  <h3 className="mb-6 text-3xl font-bold text-gray-300">İş Təcrübəsi</h3>
                  {data.experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}>
                      <Card className="mb-6">
                        <CardContent>
                          <h4 className="text-2xl font-semibold">{exp.company}</h4>
                          <p className="text-xl text-gray-400">{exp.position}</p>
                          <p className="mb-4 text-sm">{`${exp.startDate} - ${exp.endDate}`}</p>
                          <ul className="list-disc list-inside">
                            {exp.duties.map((duty, i) => (
                              <li key={i} className="mb-1 text-sm">
                                {duty}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </section>
              )}

              {activeSection === 'təhsil' && (
                <section>
                  <h3 className="mb-6 text-3xl font-bold text-gray-300">Təhsil</h3>
                  {data.educationData.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}>
                      <Card className="mb-6">
                        <CardContent>
                          <h4 className="text-2xl font-semibold">{edu.institution}</h4>
                          <p className="text-xl">{edu.degree}</p>
                          <p className="text-gray-400">{edu.faculty}</p>
                          <p className="text-sm">{edu.period}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </section>
              )}

              {activeSection === 'bacarıqlar' && (
                <section>
                  <h3 className="mb-6 text-3xl font-bold text-gray-300">Bacarıqlar</h3>
                  {Object.entries(data?.skills)?.map(([category, skills]) => (
                    <div key={category} className="mb-6">
                      <h4 className="mb-4 text-2xl font-semibold capitalize">{category}</h4>
                      <div className="flex flex-wrap gap-3">
                        {skills?.map((skill, index) => (
                          <motion.span
                            key={index}
                            whileHover={{ scale: 1.1, rotate: 3 }}
                            className="px-4 py-2 text-lg text-blue-500 underline rounded-md bg-gray-800/50">
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  ))}
                </section>
              )}

              {activeSection === 'sertifikatlar' && (
                <section>
                  <h3 className="mb-6 text-3xl font-bold text-gray-300">Sertifikat</h3>
                  {Object.entries(data?.certificates)?.map(([category, certs]) => (
                    <div key={category} className="mb-6">
                      <h4 className="mb-4 text-2xl font-semibold capitalize">{category}</h4>
                      {certs.map((cert, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}>
                          <Card className="mb-4">
                            <CardContent>
                              <h5 className="text-xl font-semibold">{cert?.title}</h5>
                              <p className="text-lg">{cert?.issuer}</p>
                              <p className="mb-2 text-sm">{cert?.date}</p>
                              <a
                                href={cert?.verificationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline transition-colors duration-200 select-auto hover:text-gray-200">
                                Yoxla
                              </a>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </section>
              )}

              {activeSection === 'əlaqə' && (
                <section>
                  <h3 className="mb-6 text-3xl font-bold text-gray-300">Əlaqə</h3>
                  <div className="flex flex-wrap justify-center gap-6">
                    {data?.contacts
                      ?.filter((contact) => contact?.visible)
                      ?.map((contact, index) => (
                        <motion.a
                          key={index}
                          href={contact?.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="select-auto">
                          <Card className="flex items-center justify-center w-24 h-24">
                            <CardContent className="p-0">
                              <img src={contact?.icon} alt={contact?.name} className="w-12 h-12" />
                            </CardContent>
                          </Card>
                        </motion.a>
                      ))}
                  </div>
                </section>
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="p-6 text-center bg-black/80">
          <p className="text-lg">&copy; {new Date().getFullYear()} RQI. Bütün hüquqlar qorunur.</p>
        </footer>
      </motion.div>
    </div>
  );
}
