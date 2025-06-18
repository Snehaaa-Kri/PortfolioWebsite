import { motion } from "framer-motion";

const tabs = ["My Skills", "Education", "Experience", "Additional Skills", "Tools"];

const TabNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <motion.div
      className="flex justify-center gap-6 p-2 mx-auto mt-2 w-fit rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {tabs.map((tab, idx) => (
        <motion.button
          key={idx}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-1 rounded-full font-medium text-2xl transition backdrop-blur-lg ${
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
    </motion.div>
  );
};

export default TabNavigation;
