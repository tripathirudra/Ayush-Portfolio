import { motion } from "framer-motion";

export default function Hero({ text }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-10 py-32 gap-20">
      <div className="flex-1">
        <h2 className="text-5xl font-extrabold">{text}|</h2>
        <p className="mt-6 max-w-xl opacity-80">
          I build secure authentication systems, scalable APIs, and modern web applications.
        </p>
      </div>

      <div className="flex-1 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-80 h-80 rounded-full border-4 border-blue-500 overflow-hidden">
            <img
              src="https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/714f99bf-9215-4f48-9835-f8a8ecc3e1b7.jpeg"
              alt="Ayush Tripathi"
              className="w-full h-full object-cover rounded-full"
              style={{ objectPosition: "center 20%" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
