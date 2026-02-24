import { useState } from 'react';
import AdminSidebar from './components/AdminSidebar';
import AdminOverview from './components/AdminOverview';
import AdminJobs from './components/AdminJobs';
import AdminFirms from './components/AdminFirms';

type Tab = 'overview' | 'jobs' | 'firms' | 'clerkship' | 'patent' | 'alerts' | 'success' | 'blog' | 'newsletter' | 'about';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState<Tab>('overview');

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return <AdminOverview />;
            case 'jobs':
                return <AdminJobs />;
            case 'firms':
                return <AdminFirms />;
            default:
                return (
                    <div className="p-8">
                        <h1 className="text-2xl font-bold text-gray-800 capitalize">{activeTab.replace('-', ' ')}</h1>
                        <p className="text-gray-600 mt-2">Management interface for {activeTab} coming soon...</p>
                    </div>
                );
        }
    };

    return (
        <div className="flex min-h-screen bg-slate-50">
            <AdminSidebar activeTab={activeTab as any} onTabChange={setActiveTab as any} />
            <main className="flex-1 overflow-y-auto">
                {renderContent()}
            </main>
        </div>
    );
}
