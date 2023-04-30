import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import Imagem from '../assets/imagem/imag01.jpg'

import './Timeline.css'
import { FormEvent, useState } from "react"

export function Timeline() {

  const [newTweet, setNewTweet] = useState('')

  // estados
  const [tweets, setTweets] = useState  ([
    'Meu primeiro twett',
    'Teste',
    'Deu certo tweetar'
  ])

  // função para submeter tweet
  function createNewTweet(event: FormEvent) {
    event.preventDefault()
    // tweets.push(newTweet)

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  return (
    <main className='timeline'>
      <Header title='Home' />


      <form onSubmit={createNewTweet} className='new-tweet-form'>
        <label htmlFor="tweet">
          <img src={Imagem} alt="António Miranda Quintas" />

          <textarea
          id='tweet'
          placeholder="What's happening?"
          value={newTweet}
          onChange={ (event) => {
            setNewTweet(event.target.value)
          } }
          />
        </label>

        <button type='submit'>Tweet</button>
      </form>

      <Separator />

      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}

    </main>
  )
}