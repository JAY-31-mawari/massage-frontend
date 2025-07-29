import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

export default function ChangePassword() {
    let [show, setShow] = useState<boolean>(false)
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
                            <div className="form-submit">
                                <h4>Change Your Password</h4>
                                <div className="submit-section">
                                    <div className="row">
                                        <div className="form-group col-lg-12 col-md-6">
                                            <label>Old Password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>New Password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Confirm password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                        <div className="form-group col-lg-12 col-md-12">
                                            <button className="btn btn-primary px-5 rounded" type="submit">Save Changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </main >
            </div >
        </>
    )
}
