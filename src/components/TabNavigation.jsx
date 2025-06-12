const tabs = ["My Skills", "Education", "Experience", "Additional Skills"];

const TabNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center gap-6 p-2 mx-auto mt-6 w-fit rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-md">
      {tabs.map((tab, idx) => (
        <button
          key={idx}
          className={`px-4 py-1 rounded-full font-medium text-2xl transition backdrop-blur-lg hover:bg-white  ${activeTab === tab ? 'bg-white text-yellow-800' : 'hover:text-yellow-800'}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
