'use client';
import React, { useState } from 'react';

export default function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                onClick={toggleModal}
                className="px-4 py-2 text-white bg-blue-500 rounded"
            >
                Open Modal
            </button>

            {isOpen && (
                <>
                    <div className="fixed inset-0 bg-black opacity-50" onClick={toggleModal} />
                    <div className="fixed inset-0 flex items-center justify-center">
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
                    </div>
                </>
            )}
        </div>
    );
}