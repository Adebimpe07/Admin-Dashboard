import { Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import SupportHeader from "../../src/components/main/body/supportPage/supportHeader";


const FaqsSubHeader = dynamic(
  () => import("../../src/components/main/body/supportPage/faqsSubHeader"),
  { ssr: false }
);

const Faqs = () => {
const form = useForm({
  initialValues: {
    faqs: [
      {question: '', answer: ''},
      {question: '', answer: ''},
      {question: '', answer: ''}
    ]
  }
})
  const [questions, setQuestions] = useState([])

  const fetchFaqs = () => {
    var config = {
  method: 'get',
  url: 'https://atsbk.afexats.com/api/v1/support/FAQ-list-create/',
};
axios(config)
.then((response) => {
  console.log((response.data));
  // setQuestions(response.data.data.results)
  for(let i = 0; i < response.data.data.results.length; i++) {
    form.values.faqs[i].question = response.data.data.results[i].question
    form.values.faqs[i].answer = response.data.data.results[i].answer
  }
})
.catch((error) => {
  console.log(error);
});

}

useEffect(() => {
   fetchFaqs()
 }, [])
 
  return (
    <div className="flex-1 bg-mainBg flex flex-col overflow-auto  gap-8 h-full">
      <SupportHeader />
      <FaqsSubHeader />
      <section className="px-12 flex flex-col py-8 gap-4 mx-6 bg-white">
        <h1 className="text-[#4A4C58] text-[1.5rem] leading-8">
          Create Frequently Asked questions
        </h1>
        <article className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h3>FAQ 1</h3>
            <Textarea cols={50} {...form.getInputProps(`faqs.0.question`)} classNames={{  
            input: "border rounded-xl border-[#D0D5DD]"
            }} />
          </div>
          <div>
            <h3>Answer</h3>
            <Textarea cols={50} {...form.getInputProps(`faqs.0.answer`)}  classNames={{  
            input: "border rounded-xl border-[#D0D5DD]"
            }} />
          </div>
        </article>
        <article   className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h3>FAQ 2</h3>
            <Textarea cols={50} {...form.getInputProps(`faqs.1.question`)} classNames={{  
            input: "border rounded-xl border-[#D0D5DD]"
            }} />
          </div>
          <div>
            <h3>Answer</h3>
            <Textarea cols={50} {...form.getInputProps(`faqs.1.answer`)}  classNames={{  
            input: "border rounded-xl border-[#D0D5DD]"
            }} />
          </div>
        </article>
        <article className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h3>FAQ 3</h3>
            <Textarea cols={50} {...form.getInputProps(`faqs.2.question`)} classNames={{  
            input: "border rounded-xl border-[#D0D5DD]"
            }} />
          </div>
          <div>
            <h3>Answer</h3>
            <Textarea cols={50} {...form.getInputProps(`faqs.2.answer`)}  classNames={{  
            input: "border rounded-xl border-[#D0D5DD]"
            }} />
          </div>
        </article>
        <button className="w-full align-middle bg-green-400 border rounded-xl text-white py-3">save</button>
      </section>
    </div>
  );
};

export default Faqs;
