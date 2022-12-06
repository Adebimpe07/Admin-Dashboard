import React, { useState } from "react";
import Link from "next/link";
const albumPicturesHeader = ({ setOpenedPics }) => {
    const [opened, setOpened] = useState(false);
    return (
        <div className='flex justify-between pt-6 mb-6 px-5'>
            <button onClick={() => setOpenedPics(false)} className="text-[#252735]text-base font-semibold">Back to gallery</button>
        </div>
    );
};
export default albumPicturesHeader;
