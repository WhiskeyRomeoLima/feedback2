import { useState } from "react"
import Card from './shared/Card'
  
function FeedbackItem() {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('Example feedback item')

  // The two divs in Card are the children of Card
  return (
    <Card>
      <div className='num-display'> {rating}</div>
      <div className='text-display'> {text}</div>
    </Card>
  )
}

export default FeedbackItem