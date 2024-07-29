import {useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({handleAddFeedback}) {
    const[text, setText] = useState('')
    const[rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = ({target: {value}}) => {
        if (value ===''){
            setBtnDisabled(true)
            setMessage(null)
        } else if (value.trim().length < 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        }
        else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            }
            handleAddFeedback(newFeedback)
            setText('')
        }
    }

    // Note in Button how isDisabled is not an attribute of a html button (it is a prop).  
    // But we use it to set the disabled attribute (see Button component in shared folder). 
    return (
        <Card>
            <form onSubmit={handleSubmit}>
            <h2>Please rate your service with us?</h2>
            {/* <RatingSelect select={(rating) => setRating(rating)} /> */}
            <RatingSelect select={setRating} selected={rating} />
            <div className='input-group'>
                    <input onChange={handleTextChange} 
                    type='text' 
                    placeholder='Write a review' 
                    value={text} />

                    <Button 
                        type='submit' 
                        isDisabled={btnDisabled}  
                        version='primary'>
                        Submit Review
                    </Button>
            </div>
            {message && <div className='message'>{message}</div>}
            </form>
        </Card>
  )
}

export default FeedbackForm
