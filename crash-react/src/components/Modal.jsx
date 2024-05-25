import './Modal.css'

function modal({title}){
return <>
    <div className="modal">
      <p className="modal__title" >{title}</p>
      <div className="modal__buttons">
        <button className="btn btn__cancel"
        onClick ={() => console.log('Delete')}>Cancel</button>
        <button className="btn"
        onClick = {() => console.log('Confirmed')}>Confirm</button>
      </div>
    </div>
    <div className="backdrop" />
  </>
}

export default modal;