import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../store/userStore';
import { deleteStorageItem } from '../utils/sessionStorage';

export default function AdminSidebar({ selectedPage, setSelectedPage }: { selectedPage: string, setSelectedPage: (val: string) => void }) {
    const navigate = useNavigate();
    const clearUser = useUserStore((state)=>state.clearUser)
    return (
        <div className="sidebar-widgets h-full bg-white shadow-lg px-6 py-8">
            <ul className="space-y-1 pl-0">
                {[
                    // { key: 'dashboard', label: 'Dashboard' },
                    { key: 'my-profile', label: 'My Profile' },
                    // { key: 'bookmark-list', label: 'Bookmarked Listings' },
                    { key: 'my-orders', label: 'My Orders' },
                    // { key: 'submit-property-dashboard', label: 'Submit Property' },
                    // { key: 'checkout', label: 'Checkout' },
                    { key: 'payment', label: 'Payment' },
                    { key: 'change-password', label: 'Change Password' },
                ].map((item) => (
                    <li
                        key={item.key}
                        onClick={() => setSelectedPage(item.key)}
                        className={`cursor-pointer px-4 py-3 rounded-md font-medium transition-all duration-200 text-sm tracking-wide ${selectedPage === item.key
                                ? 'bg-blue-600 text-white shadow-sm'
                                : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                            }`}
                    >
                        {item.label}
                    </li>
                ))}
                <li className='cursor-pointer px-4 py-3 rounded-md font-medium transition-all duration-200 text-sm tracking-wide text-gray-700 hover:bg-gray-100 hover:text-blue-600' onClick={() => navigate("/")}>
                    Book an Appointment 
                </li>
                <li className='cursor-pointer px-4 py-3 rounded-md font-medium transition-all duration-200 text-sm tracking-wide text-gray-700 hover:bg-gray-100 hover:text-blue-600' onClick={() => {
                    clearUser()
                    deleteStorageItem('user-data')
                    deleteStorageItem('token')
                    deleteStorageItem('user_id')
                    deleteStorageItem('uid')
                    deleteStorageItem('userName')
                    deleteStorageItem('user_email')
                    navigate('/create-account')
                }}>
                    Logout
                </li>
            </ul>
        </div>
    );
}

