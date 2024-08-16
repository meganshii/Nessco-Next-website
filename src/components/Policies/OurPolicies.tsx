"use client";
"use client";
import React, { useState } from 'react';
import { BsPlusLg, BsDashLg } from 'react-icons/bs';

const PolicyHeader = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="bg-[#f7f7f7] w-full">
            <div 
                className="flex justify-between items-center h-[5rem] cursor-pointer" 
                onClick={toggleExpansion}
            >
                <h2 className="text-xl font-poppins p-6 text-[#6f6f6f] ml-[4.5rem]">Our Policies</h2>
                {isExpanded ? (
                    <BsDashLg className="text-2xl mr-7 text-[#6f6f6f]" />
                ) : (
                    <BsPlusLg className="text-2xl mr-7 text-[#6f6f6f]" />
                )}
            </div>
            <div className="border border-gray-400 w-full"></div>

            {isExpanded && (
                <div className="mt-4 ml-[4.5rem] mr-7 p-4 bg-[#f7f7f7] max-h-[300px] overflow-hidden transition-all duration-300 ease-in-out">
                    <div className="text-[#6f6f6f] max-h-[200px] overflow-y-auto pr-2">
                        <p>
                            Information is provided on an "as is" basis and could include technical, typographical, or other errors. Ford makes no warranties, representations, or guarantees of any kind, express or implied, including but not limited to, accuracy, currency, or completeness, the operation of the Site, the information, materials, content, availability, and products. Ford reserves the right to change product specifications, pricing, and equipment at any time without incurring obligations. Your Ford dealer is the best source of the most up-to-date information on Ford vehicles.
                            <br /><br />
                            1. Current Manufacturer Suggested Retail Price (MSRP) for base vehicle. Excludes destination/delivery fee plus government fees and taxes, any finance charges, any dealer processing charge, any electronic filing charge, and any emission testing charge. Optional equipment not included. Starting A, Z, and X Plan price is for qualified, eligible customers and excludes document fee, destination/delivery charge, taxes, title, and registration. Not all vehicles qualify for A, Z, or X Plan.
                            <br /><br />
                            2. EPA-estimated city/hwy mpg for the model indicated. See fueleconomy.gov for fuel economy of other engine/transmission combinations. Actual mileage will vary. On plug-in hybrid models and electric models, fuel economy is stated in MPGe. MPGe is the EPA equivalent measure of gasoline fuel efficiency for electric mode operation.
                            <br /><br />
                            5. FordPass Connect (optional on select vehicles), the FordPass App, and complimentary Connected Service are required for remote features (see FordPass Terms for details). Connected service and features depend on compatible AT&T network availability. Evolving technology/cellular networks/vehicle capability may limit functionality and prevent operation of connected features. Connected service excludes WiFi hotspot.
                            <br /><br />
                            6. Special APR offers applied to Estimated Selling Price. Special APR offers require Ford Credit Financing. Not all buyers will qualify. See dealer for qualifications and complete details.
                            <br /><br />
                            7. Special Lease offers applied to Estimated Capitalized Cost. Special Lease offers require Ford Credit Financing. Not all buyers will qualify. See dealer for qualifications and complete details.
                            <br /><br />
                            8. Current price for “as shown” vehicle excludes destination/delivery fee plus government fees and taxes, any finance charges, any dealer processing charge, any electronic filing charge, and any emission testing charge. Does not include A, Z, or X Plan price. All Mustang Shelby GT350, Shelby GT350R, and Shelby GT500 prices exclude gas guzzler tax.
                            <br /><br />
                            9. This paragraph will have a scroll bar if it overflows. As the paragraph ends, the whole div will scroll up, and the rest of the page below will be visible. The plus icon will be replaced by a minus sign to collapse the div container.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PolicyHeader;


