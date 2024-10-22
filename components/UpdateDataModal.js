import Image from "next/image";
import { useRef } from "react";

const UpdateDataModal = ({onClose,handleChange,values,handleSave,errors}) => {

    const modalRef = useRef();

    const closeModal = (e) => {
        if(modalRef.current === e.target){
            onClose();
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSave();
        onClose();
    }
    
    return (
        <div ref={modalRef} onClick={closeModal}  className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
            <div className="p-4 bg-white gap-4 flex flex-col rounded-md h-[400px] w-[400px] sm:w-[500px]">

                <div className="flex items-center justify-between py-2 border-b border-gray-300">
                    <h1 className="font-bold text-lg">Update scores</h1>
                    <Image src="/images/html5.svg" width={30} height={30} alt="html icon"/>
                </div>
                
                <div className="flex-1 px-2">
                    <form className="grid grid-rows-4 gap-2" onSubmit={handleSubmit}>

                        <div className="  flex justify-between h-[70px] items-center">
                            <h1>Update your <span className="font-bold">rank:</span></h1>
                            <div className="flex flex-col">
                                <input className="border-none p-1 bg-gray-200 rounded-md" required type="text" name="rank" value={values.rank} onChange={handleChange}/>
                                {errors.rank && <p className=" text-red-600 text-xs"> * {errors.rank}</p>}
                            </div>
                        </div>

                        <div className="flex justify-between h-[70px] items-center">
                            <h1>Update your <span className="font-bold">percentile:</span></h1>
                            <div className="flex flex-col">
                                <input className="border-none p-1 bg-gray-200 rounded-md" required type="text" name="percentile" value={values.percentile} onChange={handleChange}/>
                                {errors.percentile && <p className=" text-red-600 text-xs"> * {errors.percentile}</p>}
                            </div>
                        </div>

                        <div className="flex justify-between h-[70px] items-center">
                            <h1>Update your <span className="font-bold">score:</span></h1>
                            <div className="flex flex-col">
                                <input className="border-none p-1 bg-gray-200 rounded-md" required type="text" name="score" value={values.score} onChange={handleChange}/>
                                {errors.score && <p className=" text-red-600 text-xs"> * {errors.score}</p>}
                            </div>
                        </div>

                        <div className="flex gap-3 mr-1 place-self-end mb-4">
                            <button className="modal-btn cancel" onClick={onClose}>CANCEL</button>
                            <button type="submit" className="modal-btn save">SAVE</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default UpdateDataModal;