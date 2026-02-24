import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    Briefcase,
    Building2,
    FileText,
    Bell,
    CheckCircle2,
    Settings,
    LogOut,
    Shield,
    BookOpen,
    Mail,
    Info,
} from 'lucide-react';

const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'jobs', label: 'Jobs', icon: Briefcase },
    { id: 'firms', label: 'Law Firms', icon: Building2 },
    { id: 'clerkship', label: 'Clerkship Jobs', icon: FileText },
    { id: 'patent', label: 'Patent Agent Jobs', icon: Shield },
    { id: 'alerts', label: 'Job Alerts', icon: Bell },
    { id: 'success', label: 'Success Stories', icon: CheckCircle2 },
    { id: 'blog', label: 'Blog', icon: BookOpen },
    { id: 'newsletter', label: 'Newsletter', icon: Mail },
    { id: 'about', label: 'About', icon: Info },
];

export default function AdminSidebar({ activeTab, onTabChange }: { activeTab: string, onTabChange: (tab: any) => void }) {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    return (
        <aside className="w-64 bg-gradient-to-b from-[#1a1555] to-[#2d1f6f] text-white min-h-screen flex flex-col shadow-xl">
            {/* Logo */}
            <div className="px-6 py-6 border-b border-white/10">
                <div className="flex items-center gap-2 mb-1">
                    <img src="https://lateralhub.com/logo/logo.png" alt="LateralHub" className="h-6 brightness-0 invert" />
                    <span className="font-bold text-lg">Admin</span>
                </div>
                <span className="text-xs text-white/50">Lateral Hub Management</span>
            </div>

            {/* Shield badge */}
            <div className="px-6 py-3">
                <div className="flex items-center gap-1.5 bg-yellow-400/10 border border-yellow-400/30 rounded-lg px-3 py-2">
                    <Shield size={14} className="text-yellow-400" />
                    <span className="text-xs text-yellow-300 font-medium">Administrator</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-2 space-y-1">
                <p className="text-white/30 text-xs font-semibold uppercase px-3 py-2 tracking-wider">Main Menu</p>
                {menuItems.map(item => {
                    const Icon = item.icon;
                    const active = activeTab === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => onTabChange(item.id as any)}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${active
                                ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20'
                                : 'text-white/70 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            <Icon size={18} />
                            {item.label}
                            {active && <span className="ml-auto w-1.5 h-1.5 bg-white rounded-full" />}
                        </button>
                    );
                })}
            </nav>

            {/* Bottom */}
            <div className="px-4 py-4 border-t border-white/10 space-y-1">
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-all">
                    <Settings size={18} />
                    Settings
                </button>
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all"
                >
                    <LogOut size={18} />
                    Logout
                </button>
            </div>
        </aside>
    );
}
