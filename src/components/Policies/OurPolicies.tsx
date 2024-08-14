import React from 'react';
import { GrAddCircle } from 'react-icons/gr'; // Importing the plus icon
import { BsPlusLg } from "react-icons/bs";
const PolicyHeader: React.FC = () => {
    return (
        <div className="bg-[#f7f7f7] h-[5rem] w-full ">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold p-6 text-[#6f6f6f]">Our Policies</h2>
                <BsPlusLg  className="text-2xl cursor-pointer -p-6 mr-7 text-[#6f6f6f]" />
            </div>
            <hr className="border-t border-black mt-10" />
        </div>
    );
};

export default PolicyHeader;
