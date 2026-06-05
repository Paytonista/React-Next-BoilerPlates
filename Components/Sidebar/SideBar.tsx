import SideBarSection from "./SideBarSection";
import type { SideBarSectionProps } from "./SideBarSection";

type SideBarProps = {
  nav: SideBarSectionProps[]; 
};


const SideBar = ({ nav }: SideBarProps) => {
  return (
    <aside className="w-56 h-screen  flex flex-col border-r">
      <div className="p-4 border-b flex items-center gap-2 text-sm font-medium">
          <div className="w-7 h-7 bg-purple-50 rounded-lg flex items-center justify-center">
                
          </div>
            Portfolio
          </div>
            <nav className  ="flex-1 p-4 overflow-y-auto">
              {nav.map(({section, items}) => ( 
                <SideBarSection key={section} section={section} items={items} />
               ))}
            </nav>
    </aside>
  );
};


export default SideBar;