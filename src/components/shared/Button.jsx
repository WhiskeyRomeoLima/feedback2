
// Provides consistent view of button across pages.
// Children = ? , version (class = btn-primary (purple) or btn-secondary (pink) isDisable is true until at 10 characters are entered in new review)
//Note how isDisabled is not an attribute of a html button (it is a prop).  But we use it to set the disabled attribute. 
function Button({children, version, type, isDisabled}) {
  return (
    <button type = {type} className={`btn btn-${version}`} disabled={isDisabled}>
        {children}
    </button>
  )
}


export default Button