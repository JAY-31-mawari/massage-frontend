import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import axios from 'axios'
import { getStorageItem } from '../../utils/sessionStorage'
import { userProperty } from '../../data/property'
import { useUserStore } from '../../store/userStore'

export default function Orders() {
    let [show, setShow] = useState<boolean>(false)
    const userData = useUserStore((state) => state.user)
    // const [userData, setUserData] = useState<any>(JSON.parse(getStorageItem('user-data')))
    const [uid, setUid] = useState(getStorageItem("uid"))
    console.log(userData)
    const [practitioners, setPractitioners] = useState<any>([])

    const fetchPractitionersByBusinessId = async () => {
        const practitionerRes = await axios.get(global.config.ROOTURL.prod + `/practitioner/${uid}`)
        setPractitioners(practitionerRes.data.data)
        console.log(practitionerRes.data.data)
    }

    useEffect(() => {
        if (userData?._id && userData?.businessName) {
            fetchPractitionersByBusinessId()
        }
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
                                {practitioners.map((item: any, index: number) => (
                                    <motion.div
                                        className="col-md-12 col-sm-12"
                                        key={item?._id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.4 }}
                                    >
                                        <div className="singles-dashboard-list">
                                            <div className="sd-list-left">
                                                <img src={item?.profilePicture} className="img-fluid" alt="" />
                                            </div>
                                            <div className="sd-list-right">
                                                <h4 className="listing_dashboard_title">
                                                    <Link to="#" className="text-primary">{item?.practitionerName}</Link>
                                                </h4>
                                                <div className="user_dashboard_listed">
                                                    Listed in <Link to="#" className="text-primary"></Link> and <Link to="#" className="text-primary">{userData?.businessName}</Link>
                                                </div>
                                                <div className="user_dashboard_listed">
                                                    Area of Expertise: <Link to="#" className="text-primary">{item?.areaOfExpertise[0]}</Link>
                                                </div>
                                                <div className="action">
                                                    <Link to="#" title="Edit"><i className="fa-solid fa-pen-to-square"></i></Link>
                                                    <Link to="#" title="202 User View"><i className="fa-regular fa-eye"></i></Link>
                                                    <Link to="#" title="Delete Property" className="delete"><i className="fa-regular fa-circle-xmark"></i></Link>
                                                    <Link to="#" title="Make Featured" className="delete"><i className="fa-solid fa-star"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </main>
            </div>
        </>
    )
}
