import { motion } from "framer-motion";

const tabs = ["My Skills", "Education", "Experience", "Additional Skills", "Tools"];

const TabNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <motion.div
      className="w-full px-1 mt-4 flex justify-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="w-fit flex flex-wrap justify-center
          gap-3 sm:gap-4 md:gap-6
          py-3 px-4
          rounded-full
          backdrop-blur-md bg-white/10
          border border-white/20 shadow-lg">
        {tabs.map((tab, idx) => (
          <motion.button
            key={idx}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap px-3 sm:px-4 py-1 sm:py-2 rounded-full font-normal tracking-widest text-xl sm:text-xl md:text-2xl transition backdrop-blur-lg cursor-pointer shadow-2xl ${
              activeTab === tab
                ? "bg-white text-yellow-800"
                : "hover:text-yellow-800 hover:bg-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {tab}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default TabNavigation;
