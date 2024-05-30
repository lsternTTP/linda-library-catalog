export default function Request(props) {
  function clickRemoveRequestHandler() {
    // call the function received from allRequest
    props.liftRequestToRemoveHandler(props.book);
  }
  
  return (
    <div>
      <p>{props.book.title}</p>
      <p>{props.book.author}</p>
      <img src={props.book.img}></img>
       <button onClick={clickRemoveRequestHandler}>X</button> 
    </div>
  )
}