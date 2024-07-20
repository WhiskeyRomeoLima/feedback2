import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from '../../feedback-app/src/data/feedbackData'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header text={true} />
      <div className='container'>
        <FeedbackList feedback={{feedback}} />
      </div>
    </>
  )
}

export default App