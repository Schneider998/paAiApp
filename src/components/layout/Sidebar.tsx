import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Briefcase, Building2, CreditCard, Settings } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 p-6 flex flex-col">
      <div className="mb-8">
        <h1 className="text-xl font-bold">PhoneSales</h1>
      </div>
      
      <nav className="space-y-1">
        <Link to="/">
          <SidebarItem 
            icon={<LayoutDashboard />} 
            text="Dashboard" 
            active={location.pathname === '/'} 
          />
        </Link>
        <Link to="/find-talent">
          <SidebarItem 
            icon={<Users />} 
            text="Find Talent" 
            active={location.pathname === '/find-talent'} 
          />
        </Link>
        <Link to="/hiring-pipeline">
          <SidebarItem 
            icon={<Briefcase />} 
            text="Hiring Pipeline" 
            active={location.pathname === '/hiring-pipeline'}
            badge="32" 
          />
        </Link>
        <Link to="/jobs">
          <SidebarItem 
            icon={<Building2 />} 
            text="Your Jobs" 
            active={location.pathname === '/jobs'}
            badge="3" 
          />
        </Link>
      </nav>

      <div className="mt-12">
        <p className="text-xs font-semibold text-gray-400 mb-4">ACCOUNT</p>
        <nav className="space-y-1">
          <SidebarItem icon={<CreditCard />} text="Billing" />
          <SidebarItem icon={<Settings />} text="Settings" />
        </nav>
      </div>

      <div className="mt-auto pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Invite Credits</span>
          <button className="text-sm text-orange-600 font-medium">Get More</button>
        </div>
        <p className="text-sm text-gray-500">42 remaining</p>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, badge, active }: { icon: React.ReactNode; text: string; badge?: string; active?: boolean }) => {
  return (
    <div className={`flex items-center px-3 py-2 rounded-lg cursor-pointer ${active ? 'bg-orange-50 text-orange-600' : 'text-gray-600 hover:bg-gray-50'}`}>
      <span className="w-5 h-5">{icon}</span>
      <span className="ml-3 flex-1">{text}</span>
      {badge && (
        <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">
          {badge}
        </span>
      )}
    </div>
  );
};

export default Sidebar;