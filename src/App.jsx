import { useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/feedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import {v4 as uuidv4 } from 'uuid'

// app.jsx -> (FeedbackForm -> RatingSelect) -> FeedbackStats -> FeedbackList({feedback, handleDelete}) -> FeedbackItem({item,handleDelete})
// FeedbackForm supports adding, enforces minimum length of reviews.
//    It adds a new review with selected rating (a new FeedbackItem)
// FeedbackStats displays the number of current reviews and their average
// FeedbackList: 
//    Takes in feedback (initialized in app.jsx) renders html ul list of reviews (FeedbackItems)
//    Takes in handleDelete (app.jsx) and passes it to each FeebackItem
//    FeedbackList renders FeedbackItem component for each item in feedback
// FeedbackItem renders the feedback number and text. 
//    Displays button (x) to delete a feedback.
//    FeedItem is where the actual deletion occurs.

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
  // exact:  use to prevent both '/' and '/about' being loaded on the same UI
  return (
    <Router> 
    <>
      <Header text={true} />
      <div className="container">
        <Routes>
          <Route exact path ='/' element = 
            {
                <>
                  <FeedbackForm handleAddFeedback = {addFeedback}/>
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>            
                </>
            }>
          </Route>
          <Route path='/about' element={<AboutPage />} />          
        </Routes>
      </div>
    </>
    </Router>
  )
}

export default App