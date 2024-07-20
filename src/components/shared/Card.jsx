function Card( {children, reverse} ) {
  return ( //if reverse && 'reverse' return `card false' else 'card reverse'
      <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )
}

export default Card

/*other options
className={`card ${reverse && 'reverse'}`
The below is conditional class.

    return ( //if reverse && 'reverse' return `card false' else 'card reverse'
        <div className={`card ${reverse && 'reverse'}`}>{children}</div>
    )

The statement is surrounded by back ticks to create an interpolated string.
${reverse && 'reverse'} is a short cut conditional which tests whether 
reverse is true or false. If false the background color of card is not changed.
If true, the background color is black (same as hearder).

Using a conditional style:
Starts off like this: style= {{}}.  
The outer brackets are just like a style in a CSS sheet.
The inner brackets represents the javascript code.
style{{
  bacgroundColor: reverse ? 'rgba(0,0,0,0.4); : '#fff',
  color: reverse ? '#fff : "#000"
}}

  return(
    <div 
    className='card' 
    style = {{
        bacgroundColor: reverse ? 'rgba(0, 0, 0, 0.4)' : '#fff',
        color: reverse ? '#fff' : '#000',
    }}>
      {children}
    </div>

*/
