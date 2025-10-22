"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-12">
              <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="font-light text-sm"
                >
                  Supported by:
                </motion.p>
    
              <div className="flex items-center justify-center gap-2">
              <div className="grid grid-cols-1 gap-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0, y: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <Image
                    src="/sentralrb.png"
                    alt="Sentral Robotik.id"
                    width={25}
                    height={25}
                    className="object-contain rounded-full shadow-lg"
                  />
                  <span className="text-sm" style={{fontSize: "9px" }}>Sentral Robotik.id</span>
                </motion.div>
              </div>
              </div>
    
    
              <div className="flex items-center justify-center gap-2">
                <motion.div
                  initial={{ opacity: 1, y: 20 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="flex items-center gap-2"
                >
    
                  
                  <Image
                    src="/AITUMEGA.png"
                    alt="Sentral Robotik.id"
                    width={25}
                    height={25}
                    className="object-contain rounded-full shadow-lg "
                  />
                  <span className="text-sm" style={{fontSize:"9px"}}>AITUMEGABOT</span>
                </motion.div>
    
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                  className="flex items-center gap-2"
                >
    
                  
                  <Image
                    src="/lr.jpg"
                    alt="Sentral Robotik.id"
                    width={25}
                    height={25}
                    className="object-contain rounded-full shadow-lg "
                  />
                  <span className="text-sm" style={{fontSize:"9px"}}>LombaRobot.id</span>
                </motion.div>
    
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{ duration: 1.4, delay: 0.8 }}
                  className="flex items-center gap-2"
                >
    
                  
                  <Image
                    src="/ichibot.jpg"
                    alt="Sentral Robotik.id"
                    width={25}
                    height={25}
                    className="object-contain rounded-full shadow-lg "
                  />
                  <span className="text-sm" style={{fontSize: "9px"}}>Ichibot.id</span>
                </motion.div>
    
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{ duration: 1.6, delay: 1 }}
                  className="flex items-center gap-2"
                >
    
                  
                  <Image
                    src="/Kakarobot.png"
                    alt="Sentral Robotik.id"
                    width={25}
                    height={25}
                    className="object-contain rounded-full shadow-lg "
                  />
                  <span className="text-sm" style={{fontSize: "9px"}}>KAKAROBOT.id</span>
                </motion.div>
    
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{ duration: 1.8, delay: 1.2 }}
                  className="flex items-center gap-2"
                >
    
                  
                  <Image
                    src="/primagama.png"
                    alt="Sentral Robotik.id"
                    width={25}
                    height={25}
                    className="object-contain rounded-full shadow-lg "
                  />
                  <span className="text-sm" style={{fontSize:"9px"}}>Primagama.id</span>
                </motion.div>
    
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{ duration: 2, delay: 1.4 }}
                  className="flex items-center gap-2"
                >
    
                  
                  <Image
                    src="/Logo-gRAVEND-v2.png"
                    alt="Sentral Robotik.id"
                    width={25}
                    height={25}
                    className="object-contain rounded-full shadow-lg "
                  />
                  <span className="text-sm" style={{fontSize:"9px"}}>Gravend.creative</span>
                </motion.div>
                </div>
                
    
                <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="font-light text-sm"
                >
                  Social Media
                </motion.p>
    
                <div className="flex justify-center items-center gap-8">
                 <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                <a
                  href="https://instagram.com/innovation_robotic_competition"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
                >
                  <img
                    src="/INS.png"
                    alt="instagram"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-[10px]">innovation_robotic_competition</span>
                </a>
                </motion.p>
    
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.6 }}
                >
                {/* Akun 2 - Sentral Robotic */}
                <a
                  href="https://www.instagram.com/mtsn2skh?igsh=MmdvZHc3ajBsY3dr"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
                >
                  <img
                    src="/INS.png"
                    alt="instagram"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-[10px]">MTS Negeri 2 Sukoharjo</span>
                </a>
               </motion.p>
                </div>
    
    
    
                <div className="flex justify-center items-center gap-8">
    
                <motion.p
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.9, delay: 0.2}}
                >
                <a 
                  href="https://www.instagram.com/sentral_robotik?igsh=ZWM0ajNjMjYxZTFm"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
                >
                  <img
                    src="/INS.png"
                    alt="instagram"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-[10px]">Sentral Robotic.id</span>
                </a>
                </motion.p>
                
                <motion.p
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.9, delay: 0.2}}
                >
                <a 
                  href="https://www.instagram.com/aitumega?igsh=MTRkNWZ4dWN4YjBneA=="
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
                >
                  <img
                    src="/INS.png"
                    alt="instagram"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-[10px]">AITUMEGABOT</span>
                </a>
                </motion.p>
                
                <motion.p
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.9, delay:0.2}}
                >
                <a 
                  href="https://www.instagram.com/lombarobot.id?igsh=dDB2bnpicTJrcGt6"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
                >
                  <img
                    src="/INS.png"
                    alt="instagram"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-[10px]">LombaRobot.id</span>
                </a>
                </motion.p>
    
                <motion.p
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y:0}}
                transition={{duration: 0.9, delay: 0.2}}
                >
                <a 
                  href="https://www.instagram.com/ichibot.id?igsh=MTV0dHo2YTZ2djIxaw=="
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
                >
                  <img
                    src="/INS.png"
                    alt="instagram"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-[10px]">Ichibot.id</span>
                </a>
                </motion.p>
    
                <motion.p
                initial={{opacity: 0, y:20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.9, delay: 0.2}}
                >
                <a 
                  href="https://www.instagram.com/kakarobot?igsh=dWNuOTY1OTRwdDJt"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
                >
                  <img
                    src="/INS.png"
                    alt="instagram"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-[10px]">KAKAROBOT.id</span>
                </a>
                </motion.p>
    
                <motion.p
                initial={{opacity: 0, y:20 }}
                whileInView={{opacity: 1, y: 0 }}
                transition={{duration: 0.9, delay: 0.2}}
                >
                <a 
                  href="https://www.instagram.com/primagama_id?igsh=MXBqOXFxbjEwM3h4Nw=="
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
                >
                  <img
                    src="/INS.png"
                    alt="instagram"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-[10px]">Primagama.id</span>
                </a>
                </motion.p>
    
    
                <motion.p
                initial={{opacity: 0, y:20}}
                whileInView={{opacity: 1, y:0 }}
                transition={{duration: 0.9, delay: 0.2}}
                >
                 <a 
                  href="https://www.instagram.com/gravend.creative?igsh=MTc5NDJ6ZTQ0Zzhqag=="
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
                >
                  <img
                    src="/INS.png"
                    alt="instagram"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-[10px]">Gravend.Creative</span>
                </a>
                </motion.p>
              </div>
    
              
                
    
                <div className="w-full border-t border-gray-700 my-4"></div>
    
                <p className="text-center text-xs sm:text-sm text-gray-400">
                  © {new Date().getFullYear()} IRC Robotik 2025. All rights reserved.
                </p>
              </div>
              </div>
            </footer>
  );
}
