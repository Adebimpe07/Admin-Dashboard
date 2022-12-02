import { Button, Modal, Textarea } from "@mantine/core";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/router'


const openEndQuestions = ({ color, questions, result }: { color: any, questions?: any, result?: Number }) => {
  const [marking, setMarking] = useState(false)

  const router = useRouter()

  const handleMarking = async (is_correct: Boolean, id: Number, cat_id: Number) => {
    const config = {
      method: "post",
      url: `http://localhost:8000/api/result/process_opa`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        "opa_pk": id,
        "is_correct": is_correct,
        "result_id": result,
        "category": cat_id
      }
    };
    try {
      const request = await axios(config)
      console.log("marked=>", request.data)
      router.reload()
      return
    } catch (error) {
      console.log("request_error=> ", error?.response?.data)
      return error.message
    }
  }

  // useEffect(handleMarking, []);


  const [opened, setOpened] = useState(false);
  return (
    <div onClick={() => setOpened(true)} className={` ${color}  font-semibold `}>
      <Modal opened={opened} onClose={() => setOpened(false)} fullScreen className=" ">
        <div className="flex flex-col gap-8">
          {questions?.map((element: any, index: any) => {
            return <div key={index} className="items-center gap-4 w-full flex flex-col" >
              <div className="flex w-full flex-col  gap-2">
                {'.'}
                <div className="text-gray-500 font-semibold text-left ">Status: <span className="text-gray-700 font-base capitalize p-2">{element.is_marked ? 'marked' : 'unmarked'}</span></div>
                <div className="text-gray-500 font-semibold">Question: <span className="text-gray-700 font-base capitalize p-2">{element.question.question_text}</span></div>
                <Textarea
                  value={element.answer_text}
                  className="w-full"
                  variant="filled"
                />

              </div>
              <div className="flex gap-2 flex-row">
                <Button

                  onClick={async () => await handleMarking(true, element.id, element.category)}
                  className="bg-greenButton hover:bg-greenButton">
                  Mark as correct
                </Button>
                <Button
                  onClick={async () => await handleMarking(false, element.id, element.category)}
                  className="bg-[#E64D45] hover:bg-[#E64D45]">
                  Mark as incorrect
                </Button>
              </div>
            </div>
          })
          }
        </div>
        {/* <div className="flex">
          <Button

            className="bg-g[#F0F0F1] hover:bg-[#F0F0F1] text-[#E1261C]">
            Cancel
          </Button>
          <Button className="bg-red hover:bg-red">Save</Button>
        </div> */}
      </Modal>
      view questions
    </div>
  );
};

export default openEndQuestions;
