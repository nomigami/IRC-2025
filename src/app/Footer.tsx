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
          className="font-light text-sm text-center"
        >
          Supported by:
        </motion.p>

        {/* Sentral Robotik */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-center">
          <div className="grid grid-cols-1 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center gap-2"
            >
              <Image
                src="/sentralrb.png"
                alt="Sentral Robotik.id"
                width={25}
                height={25}
                className="object-contain rounded-full shadow-lg"
              />
              <span className="text-sm" style={{ fontSize: "9px" }}>
                Sentral Robotik.id
              </span>
            </motion.div>
          </div>
        </div>

        {/* Logo Partners */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-center">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center gap-2"
          >
            <Image
              src="/AITUMEGA.png"
              alt="AITUMEGABOT"
              width={25}
              height={25}
              className="object-contain rounded-full shadow-lg"
            />
            <span className="text-sm" style={{ fontSize: "9px" }}>AITUMEGABOT</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="flex items-center gap-2"
          >
            <Image
              src="/lr.jpg"
              alt="LombaRobot.id"
              width={25}
              height={25}
              className="object-contain rounded-full shadow-lg"
            />
            <span className="text-sm" style={{ fontSize: "9px" }}>LombaRobot.id</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ duration: 1.4, delay: 0.8 }}
            className="flex items-center gap-2"
          >
            <Image
              src="/ichibot.jpg"
              alt="Ichibot.id"
              width={25}
              height={25}
              className="object-contain rounded-full shadow-lg"
            />
            <span className="text-sm" style={{ fontSize: "9px" }}>Ichibot.id</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ duration: 1.6, delay: 1 }}
            className="flex items-center gap-2"
          >
            <Image
              src="/Kakarobot.png"
              alt="KAKAROBOT.id"
              width={25}
              height={25}
              className="object-contain rounded-full shadow-lg"
            />
            <span className="text-sm" style={{ fontSize: "9px" }}>KAKAROBOT.id</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ duration: 1.8, delay: 1.2 }}
            className="flex items-center gap-2"
          >
            <Image
              src="/primagama.png"
              alt="Primagama.id"
              width={25}
              height={25}
              className="object-contain rounded-full shadow-lg"
            />
            <span className="text-sm" style={{ fontSize: "9px" }}>Primagama.id</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ duration: 2, delay: 1.4 }}
            className="flex items-center gap-2"
          >
            <Image
              src="/Logo-gRAVEND-v2.png"
              alt="Gravend.creative"
              width={25}
              height={25}
              className="object-contain rounded-full shadow-lg"
            />
            <span className="text-sm" style={{ fontSize: "9px" }}>Gravend.creative</span>
          </motion.div>
        </div>

        {/* Social Media */}
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-light text-sm"
          >
            Social Media
          </motion.p>

          {/* Baris 1 */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <a
                href="https://instagram.com/innovation_robotic_competition"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-1 hover:scale-105 transition-transform"
              >
                <img src="/INS.png" alt="instagram" className="w-5 h-5 object-contain" />
                <span className="text-[10px]">innovation_robotic_competition</span>
              </a>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.6 }}
            >
              <a
                href="https://www.instagram.com/mtsn2skh?igsh=MmdvZHc3ajBsY3dr"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-1 hover:scale-105 transition-transform"
              >
                <img src="/INS.png" alt="instagram" className="w-5 h-5 object-contain" />
                <span className="text-[10px]">MTS Negeri 2 Sukoharjo</span>
              </a>
            </motion.p>
          </div>

          {/* Baris 2 */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-center">
            {[
              ["https://www.instagram.com/sentral_robotik?igsh=ZWM0ajNjMjYxZTFm", "Sentral Robotic.id"],
              ["https://www.instagram.com/aitumega?igsh=MTRkNWZ4dWN4YjBneA==", "AITUMEGABOT"],
              ["https://www.instagram.com/lombarobot.id?igsh=dDB2bnpicTJrcGt6", "LombaRobot.id"],
              ["https://www.instagram.com/ichibot.id?igsh=MTV0dHo2YTZ2djIxaw==", "Ichibot.id"],
              ["https://www.instagram.com/kakarobot?igsh=dWNuOTY1OTRwdDJt", "KAKAROBOT.id"],
              ["https://www.instagram.com/primagama_id?igsh=MXBqOXFxbjEwM3h4Nw==", "Primagama.id"],
              ["https://www.instagram.com/gravend.creative?igsh=MTc5NDJ6ZTQ0Zzhqag==", "Gravend.Creative"],
            ].map(([href, name], i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-1 hover:scale-105 transition-transform"
                >
                  <img src="/INS.png" alt="instagram" className="w-5 h-5 object-contain" />
                  <span className="text-[10px]">{name}</span>
                </a>
              </motion.p>
            ))}
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
