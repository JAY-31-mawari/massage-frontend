import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

import { bookMarkProperty } from '../../data/property'

interface Bookmark {
    image: string;
    name: string;
    loction: string;
    value: string;
}

export default function BookmarkList() {
    let [show, setShow] = useState<boolean>(false)
    return (
        <>
            <div className="flex min-h-screen bg-gray-50">
                <main className="flex-1 w-full p-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-full"
                    >
                        <div className="dashboard-wraper">
                            <div className="form-submit mb-4">
                                <h4>Bookmark Property</h4>
                            </div>

                            <table className="property-table-wrap responsive-table bkmark w-full">
                                <thead>
                                    <tr>
                                        <th><i className="fa fa-file-text"></i> Property</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookMarkProperty.map((item: Bookmark, index: number) => (
                                        <tr key={index}>
                                            <td className="property-container">
                                                <img src={item.image} alt="" />
                                                <div className="title">
                                                    <h4><Link to="#">{item.name}</Link></h4>
                                                    <span>{item.loction}</span>
                                                    <span className="table-property-price">{item.value}</span>
                                                </div>
                                            </td>
                                            <td className="action">
                                                <Link to="#" className="delete text-red-600 hover:underline">
                                                    <i className="fa-solid fa-trash-can"></i> Delete
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </main>
            </div>
        </>
    )
}
