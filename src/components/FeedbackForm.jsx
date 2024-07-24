import {useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm(onSubmit={handleSubmit}) {
    const[text, setText] = useState('')
    const[rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = ({target: {value}}) => {
        if (value ===''){
            setBtnDisabled(true)
            setMessage(null)
        } else if (text.trim().length < 9) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        }
        else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(value)
    
    }
    // Note how isDisabled is not an attribute of a html button (it is a prop).  
    // But we use it to set the disabled attribute. 
    // (see Button component)
    return (
        <Card>
            <form>
            <h2>Please rate your service with us?</h2>
            <RatingSelect />
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
