import React from 'react'

function Alert(props) {
const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);

}


  return (
    <div className="high" style={{heigt: '50px'}}>
 { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show` }role="alert">
 {capitalize(props.alert.type)} <strong>{props.alert.msg}</strong> .
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>}
</div>
  )
}

export default Alert
