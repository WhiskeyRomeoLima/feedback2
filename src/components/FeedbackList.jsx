import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion' //removed the code - see notes at end of code

function FeedbackList({ feedback, handleDelete }) {

  if (!feedback || feedback.length === 0) {
    return <p>Be the first to review!</p>
  }

  // Display each feedback (item), feedback is an array so use Array.map the generate each item in feedback.
  /* an item
    {
      id: 1,
      rating: 10,
      text: 'Lorem ipsum dolor ...',
    },
*/
  return (
    <div className='feedback-list'>
    <AnimatePresence>
      {feedback.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          layout
        >
          <FeedbackItem
            key={item.id}
            item={item}
            handleDelete={handleDelete}
          />
        </motion.div>
      ))}
    </AnimatePresence>       
  </div>
  )
}
export default FeedbackList

/* Removed framer-motion code which solved this problem
client:598 
 GET http://localhost:5173/src/components/FeedbackItem.jsx?t=1721926029773 
 net::ERR_ABORTED 500 (Internal Server Error)

client:176 [hmr] Failed to reload /src/components/FeedbackItem.jsx. 
This could be due to syntax errors or importing non-existent modules. (see errors above)
*/

/* original without animation
      {feedback.map((item) => (
        <FeedbackItem 
            key = {item.id} 
            item = {item} 
            handleDelete = {handleDelete}
        />   
      ))}
*/

/*

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>       
    </div>

  )
}

*/