import { useState} from 'react'
import './App.css'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/feedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import {v4 as uuidv4 } from 'uuid'

// app.jsx -> FeedbackStats -> FeedbackList({feedback, handleDelete}) -> FeedbackItem({item,handleDelete})
// FeedbackStats displays the number of current reviews and their average
// handleDelete is set equal to deleteFeedback function and passed down as indicated above
// FeedbackList renders FeedbackItem component for each item (feedback)
// FeebackItem renders the feedback number and text.  Displays button to delete a feedback.

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    console.log(newFeedback)
    setFeedback([newFeedback, ...feedback]) // We cannot mutate state, so we create a new array and populate as indicated (spread operator ...)
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Confirm delete')) {
      setFeedback(feedback.filter((item) => item.id != id))      
    }
  }

  return (
    <>
      <Header text={true} />
      <div className="container">
        <FeedbackForm handleAddFeedback = {addFeedback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList 
          feedback={feedback}
          handleDelete={deleteFeedback}
        />
      </div>
    </>
  )
}

export default App