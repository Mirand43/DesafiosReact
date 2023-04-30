import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import Imagem from '../assets/imagem/imag01.jpg'
import './Status.css'
import { Tweet } from "../components/Tweet"
import { FormEvent, useState } from "react"
import { PaperPlaneRight } from "phosphor-react"

// const answers = [
//     'Concordo...',
//     'Olha, faz sentido!',
//     'Parabéns pelo progresso.'
// ]


export function Status() {

    const [newAnswer, setNewAnswer] = useState('')

    // estados
    const [answers, setAnswers] = useState([
        'Concordo...',
        'Olha, faz sentido!',
        'Parabéns pelo progresso.'
    ])

    // função para submeter tweet
    function createNewAnswers(event: FormEvent) {
        event.preventDefault()
        // tweets.push(newTweet)

        setAnswers([newAnswer, ...answers])
        setNewAnswer('')
    }

    return (
        <main className='status'>
            <Header title='Tweet' />

            <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, at expedita. Voluptatibus debitis consectetur illo ipsa quaerat rem labore optio corporis eligendi nemo ab nam, ut aperiam ad reprehenderit. Esse.
" />
            <Separator />

            <form onSubmit={createNewAnswers} className='answer-tweet-form'>
                <label htmlFor="tweet">
                    <img src={Imagem} alt="António Miranda Quintas" />

                    <textarea
                        id='tweet'
                        placeholder="Tweet your answer"
                        value={newAnswer}
                        onChange={(event) => {
                            setNewAnswer(event.target.value)
                        }}
                    />
                </label>

                <button type='submit'>
                    <PaperPlaneRight/>
                    <span>Answer</span>
                </button>
            </form>

            {answers.map(answers => {
                return <Tweet key={answers} content={answers} />
            })}

        </main>
    )
}