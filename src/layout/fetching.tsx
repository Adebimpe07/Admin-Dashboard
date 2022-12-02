// fetch("${process.env.NEXT_PUBLIC_BASE_URL_1}/api/categories/", {
//                   method: "post",
//                   headers: { "Content-Type": "application/json" },
//                   body: JSON.stringify(categoryForm.values),
//                 })
//                   .then((res) => res.json())
//                   .then((data) => {
//                     console.log(data);
//                     setCategoryID(data.data.id);
//                     if (title === "Essay") {
//                       setQuestionType("Open-ended");
//                       questionsForm.values.question_type = "Open-ended";
//                     } else if (title === "Multiple Choice") {
//                       setQuestionType("Multi-choice");
//                       questionsForm.values.question_type = "Multi-choice";
//                     }
//                     .catch()
//                     router.push(href);
//                   });

//                   var postBody = JSON.stringify(questionsForm.values);

//     const [cardData, setCardData] = usestate([])

//     axios("${process.env.NEXT_PUBLIC_BASE_URL_2}/api/categories/")
//         .then(function (response) {
//             setCardData(response.data)
//         }
//         })
//         .catch(function (error) {
//         console.log(error);
//         });

//         cardsdata?.map((item, idx) => {
//             retrun jsx
//         })

// const [success, setSuccess] = usestate(false)
//         var postBody = JSON.stringify(myFormValues);

//                 var config = {
//                   method: "post",
//                   url: "${process.env.NEXT_PUBLIC_BASE_URL_1}/api/categories/",
//                   headers: {
//                     "Content-Type": "application/json",
//                   },
//                   data: postBody,
//                 };

//                 axios(config)
//                   .then(function (response) {
//                     if(response.statusText === 'success')
//                     setSuccess(true)
//                     console.log(response.data)
//                   })
//                   .catch(function (error) {
//                     console.log(error);
//                   });

//                   <p>{success? 'message sent successfully' : null}</p>
