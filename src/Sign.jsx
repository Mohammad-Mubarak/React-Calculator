import React from 'react'

function Sign({getOperation}) {
  return (
   <>
    <div className="parent_container">
        <div className="sign" data-value="-" onClick={(e)=>getOperation(e.target.getAttribute('data-value'))}>-</div>
        <div className="sign" data-value="+" onClick={(e)=>getOperation(e.target.getAttribute('data-value'))}>+</div>
        <div className="sign" data-value="/" onClick={(e)=>getOperation(e.target.getAttribute('data-value'))}>/</div>
        <div className="sign" data-value="*" onClick={(e)=>getOperation(e.target.getAttribute('data-value'))}>*</div>
    </div>
   </>
  )
}

export default Sign