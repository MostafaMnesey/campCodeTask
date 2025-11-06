import React from 'react'

type props = {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    label: string
    content: React.ReactNode
}

export default function Drawer({ open, setOpen, label, content }: props) {
    return (
        <>
            {/* الخلفية الشفافة لما الـ Drawer يكون مفتوح */}
            <div
                className={`fixed inset-0 bg-black/10 z-30 transition-opacity duration-300 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setOpen(false)}
            />

            {/* الـ Drawer نفسه */}
            <div
                className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto bg-white w-[60%] lg:w-[30%] dark:bg-gray-800 
        transform transition-transform duration-500 ease-in-out
        ${open ? 'translate-x-0' : 'translate-x-full'}
        `}
            >
                <h5 className="inline-flex items-center mb-4 text-base font-semibold text-gray-700 dark:text-gray-400">
                    {label}
                </h5>

                <div className="">{content}</div>

                <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                </button>
            </div>
        </>
    )
}
