'use client';
import React, { useState } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                onClick={toggleModal}
                className="flex items-center gap-2 border border-white 
                        text-white px-4 py-2 text-[10px]">
                <BiUserCircle className="w-6 h-6" />
                LOGIN
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleModal}
                        />

                        {/* Modal */}
                        <motion.div
                            className="fixed inset-0 flex items-center justify-center"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
                                <h2 className="text-lg font-semibold">Modal Title</h2>
                                <p className="mt-4">This is a simple modal example.</p>
                                <div className="mt-6 flex justify-end">
                                    <button
                                        onClick={toggleModal}
                                        className="px-4 py-2 text-white bg-red-500 rounded"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
