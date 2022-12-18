import AfexLogo from "./assets/afex logo 1.svg";

const MockQuestionHeader = () => {
    return (
        <div className="flex justify-between bg-white  px-[80px] items-center py-[15px] border-b border-solid border-b-[#8F9198]">
            <img src={AfexLogo.src} className="h-[32px]" alt="" />
        </div>
    );
};

export default MockQuestionHeader;
