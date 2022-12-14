const MockQuestionInfoBar = ({ title }) => {
    return (
        <div className=" px-[80px] py-[10px] bg-[#352929] flex justify-between items-center">
            <div className="flex gap-[8px] items-center">
                <p className="text-[18px] text-[white] font-medium leading-[140%]">
                    Category
                </p>
                <hr className="h-[25px] border-white opacity-50 border border-solid w-[1px]" />
                <p className="text-[#fff] font-light text-[14px]">{title}</p>
            </div>
            <div className="bg-[#F8CBC9] flex items-center gap-[4px] px-[10px] py-[5px] rounded-lg">
                <img src="" alt="" />
                <p className="text-[22px] leading-[33.6px] font-medium">
                    <span>00</span>:<span>00</span>
                </p>
            </div>
        </div>
    );
};

export default MockQuestionInfoBar;
