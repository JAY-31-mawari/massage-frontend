import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import axios from 'axios'
import { getStorageItem, deleteStorageItem } from '../../utils/sessionStorage'
import { useUserStore } from '../../store/userStore'
import toast from 'react-hot-toast'

interface BusinessData {
    businessName: string
    business_phone: string
    merchantAddress: string
    _id: string
}

interface AppointmentHistory {
    active: boolean
    appointmentDate: string
    businessId: BusinessData
    duration: number
    price: number
    reminderSend: boolean
    serviceName: string
    serviceType: string
    userId: string
    _id: string
}

export default function Orders() {
    const navigate = useNavigate()
    const [userAppointmentHisotry, setUserAppointmentHistory] = useState<AppointmentHistory[]>([])
    let [show, setShow] = useState<boolean>(false)
    const user = useUserStore((state) => state.user)
    const accessToken = getStorageItem("token")
    const [uid, setUid] = useState(getStorageItem("uid"))
    const [practitioners, setPractitioners] = useState<any>([])

    // const fetchPractitionersByBusinessId = async () => {
    //     const practitionerRes = await axios.get(global.config.ROOTURL.prod + `/practitioner/${uid}`)
    //     setPractitioners(practitionerRes.data.data)
    //     console.log(practitionerRes.data.data)
    // }

    const fetchUserAppointments = async () => {
        if (!user?._id) {
            toast.error("Please Login First and select service");
            setTimeout(() => {
                navigate("/create-account");
            }, 2000);
            return;
        }

        const appointmentPayload = {
            method: 'GET',
            url: global.config.ROOTURL.prod + `/appointment/user/${user._id}`,
            headers: {
                Authorization: "Bearer " + accessToken,
                "Content-type": "application/json",
            },
        }

        await axios(appointmentPayload).then((res) => {
            setUserAppointmentHistory(res.data?.data)
        }).catch((err) => {
            if (err.response.status === 401) {
                console.log("UnAuthorized Access, getPayment")
                deleteStorageItem('user-data')
                deleteStorageItem('token')
                setTimeout(() => {
                    navigate("/create-account");
                }, 2000);
            }
        })
    }

    useEffect(() => {
        fetchUserAppointments()
    }, [])

    return (
        <>
            <div className="flex min-h-screen bg-gray-50">
                {/* Main Content */}
                <main className="flex-1 p-6">
                    <div className="bg-white rounded-lg p-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <div className="form-submit mb-4">
                                <h4>My Orders</h4>
                            </div>

                            <div className="row">
                                {userAppointmentHisotry.length !== 0 && userAppointmentHisotry.map((appointment, index: number) => {
                                    const date = new Date(appointment?.appointmentDate);

                                    const year = date.getUTCFullYear();
                                    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // months are 0-based
                                    const day = String(date.getUTCDate()).padStart(2, '0');
                                    
                                    const hours = date.getUTCHours();
                                    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
                                    const ampm = hours >= 12 ? 'PM' : 'AM';
                                    const hour12 = String(hours % 12 || 12).padStart(2, '0');
                                    
                                    const formatted = `${year}-${month}-${day} ${hour12}:${minutes} ${ampm}`;

                                    return (<motion.div
                                        className="col-md-12 col-sm-12"
                                        key={appointment?._id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.4 }}
                                    >
                                        <div className="singles-dashboard-list">
                                            <div className="sd-list-left">
                                                {/* <img src={item?.profilePicture} className="img-fluid" alt="" /> */}
                                            </div>
                                            <div className="sd-list-right">
                                                <h4 className="listing_dashboard_title">
                                                    <Link to="#" className="text-primary">{appointment?.businessId?.businessName}</Link>
                                                </h4>
                                                <div className="user_dashboard_listed">
                                                    Appointment Date & Time: <Link to="#" className="text-primary">{formatted}</Link>
                                                </div>
                                                <div className="user_dashboard_listed">
                                                    Service Type : <Link to="#" className="text-primary">{appointment?.serviceType}</Link>
                                                </div>
                                                <div className="user_dashboard_listed">
                                                    Area of Expertise: <Link to="#" className="text-primary">{appointment?.serviceName}</Link>
                                                </div>
                                                <div className="user_dashboard_listed">
                                                    Price: <Link to="#" className="text-primary">{appointment?.price}</Link>
                                                </div>
                                                <div className="action">
                                                    <Link to="#" title="Edit"><i className="fa-solid fa-pen-to-square"></i></Link>
                                                    <Link to="#" title="202 User View"><i className="fa-regular fa-eye"></i></Link>
                                                    <Link to="#" title="Delete Property" className="delete"><i className="fa-regular fa-circle-xmark"></i></Link>
                                                    <Link to="#" title="Make Featured" className="delete"><i className="fa-solid fa-star"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>)
                                })}
                            </div>
                        </motion.div>
                    </div>
                </main>
            </div>
        </>
    )
}
