import Image from "next/image";
import UpdateDataModal from "./UpdateDataModal";
import { useState } from "react";

const UpdateData = ({handleChange,values,handleSave,errors}) => {
    const [showModal,setShowModal] = useState(false);
    return ( 
        <div className="flex items-center justify-evenly border-t border-b border-gray-300 pt-4 pb-4 w-full">
            <div className="flex flex-col items-center">
                <h1 className="font-bold">HTML</h1>
                <Image src="/images/html5.svg" width={60} height={60} alt="html icon"/>
            </div>
            <div className="ml-2 mr-2 text-xs sm:text-lg">
                <h1 className="font-bold mb-2">Hyper Text Markup Language</h1>
                <p className="text-gray-500 text-sm"> Questions: 08 | Duration: 15 mins | Submitted on : 5 June 2021 </p>
            </div>
            <button className="bg-indigo-900 pl-6 pr-6 rounded-md h-10 text-sm font-bold text-white hover:bg-indigo-600 transition-colors ease" onClick={()=>setShowModal(true)}>Update</button>
            {showModal && <UpdateDataModal
                values={values} 
                handleChange={handleChange}
                handleSave = {handleSave}
                onClose={() => setShowModal(false)}
                errors = {errors}
                />}
        </div>
    );
}

export default UpdateData;