function Button({children, version, type, isDisabled}) {
  return (
    <button type = {type} className={`btn btn-${version}`} disabled={isDisabled}>
        {children}
    </button>
  )
}


export default Button