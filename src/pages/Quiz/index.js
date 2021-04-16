import React, {useEffect, useState} from 'react'

function Quiz(){
    const [showAnswer, setShowAnswer ] = useState();
    const [questions, setQuestions ] = useState()


    let i = (Math.floor(Math.random() * 10))


    useEffect(() => {
         function getFact() {
            try {
                 let facts = [
                    {id: 1, question: "What is Justin's half-brother's name?", answer: "Jaxon"},
                    {id: 2, question: "Who did Justin date before Selena?", answer: "Jasmine Villegas"},
                    {id: 3, question: "Which singer also wanted to mentor Justin, although Usher ultimately won out?", answer: "Justin Timberlake"},
                    {id: 4, question: "Which Canadian city is Justin from?", answer: "Jasmine Stratford"},
                    {id: 5, question: "Justin has a diamond necklace with a pendant of which cartoon character?", answer: "Stewie from Family Guy"},
                    {id: 6, question: "Which TV show did Justin guest star in?", answer: "C.S.I"},
                    {id: 7, question: "Which TV show did Justin guest star in?", answer: "C.S.I"},
                    {id: 8, question: "Which TV show did Justin guest star in?", answer: "C.S.I"},
                    {id: 9, question: "Which TV show did Justin guest star in?", answer: "C.S.I"},
                ]
        
                setQuestions(facts[i].question)
                setShowAnswer(facts[i].answer)
            } catch (err) {
                ssetQuestions('oops')
            }

            
        }
        getFact()

        const stream = setInterval(getFact, 5000)
        console.log(stream)
        return () => clearInterval(stream)
    }, [])
    
  

    return(
        <>
        
        <h1>How well do you know JB?</h1>
        
        <p>{questions}</p>
        <p>{showAnswer}</p>

        </>
    )
}

export default Quiz