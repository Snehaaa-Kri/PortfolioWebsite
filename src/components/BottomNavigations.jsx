import React, {useState} from 'react'

import BioComponent from './BioComponent.jsx';
import AboutComponent from './AboutComponent.jsx';
import ProjectsComponent from './ProjectsComponent.jsx';
import ContactComponent from './ContactComponent.jsx';

const navItems = [
  { label: "My Bio", key: "bio" },
  { label: "About Me", key: "about" },
  { label: "My Projects", key: "projects" },
  { label: "Contact Me", key: "contact" },
];



function BottomNavigations() {

    const [activeSection, setActiveSection] = useState(null);

  const renderComponent = () => {
    switch (activeSection) {
      case 'bio': return <BioComponent onBack={() => setActiveSection(null)} />;
      case 'about': return <AboutComponent onBack={() => setActiveSection(null)} />;
      case 'projects': return <ProjectsComponent onBack={() => setActiveSection(null)} />;
      case 'contact': return <ContactComponent onBack={() => setActiveSection(null)} />;
      default: return null;
    }
  };

 return (
    <>
      {!activeSection && (
        <div className="flex justify-center items-center gap-5 pb-8">
          {navItems.map((item) => (
            <div
              key={item.key}
              onClick={() => setActiveSection(item.key)}
              className="flex justify-center items-center text-4xl -translate-y-[-33px] hover:scale-105 duration-100 cursor-pointer"
            >
              <i className="ri-arrow-down-line bg-white/20 py-2 px-3 font-bold rounded-l-full backdrop-blur-sm hover:bg-white/10"></i>
              <h3 className='font-[Helvetica_Now_Display] font-semibold text-4xl bg-white/20 pl-4 py-2 px-3 rounded-r-full backdrop-blur-sm hover:bg-white/10'>
                {item.label}
              </h3>
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 z-40">{renderComponent()}</div>
    </>
  );
}


export default BottomNavigations