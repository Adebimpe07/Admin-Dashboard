import React from 'react'

const index = () => {
  return (
    <div className="grid bg-[#F5F5F6] grid-rows-[auto_auto_auto_1fr] h-full">
            <MockQuestionHeader />
            <MockQuestionInfoBar />
            <QuitDummyTest />
            <div className="dark:bg-dark-charleston-green grid grid-rows-[auto_1fr_auto] gap-[15px] bg-[#F5F5F6] px-[80px] py-[15px]">
                <QuestionNumbers />
                <MockTestQuestions />
                <MockQuestionFooter
                
                    questionType="dummy"
                />
            </div>
            {/* {startCapture ? (
                <CameraCapture setStartCapture={setStartCapture} />
            ) : null} */}
        </div>
  )
}

export default index