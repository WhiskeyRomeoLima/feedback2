import React from 'react'

function FeedbackStats({feedback}) {
    //Caluclate the average rating over all feedback.
    let average = feedback.reduce((acc, item) => {
        return (acc + item.rating)
    }, 0)/feedback.length
   
    // Format average to one decimal place
    average = average.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div>
        <h4>{feedback.length} {feedback.length == 1 ? 'Review' : 'Reviews'}</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

export default FeedbackStats
