// props is like object
function Cards({details}) {
  return (
    <div>
        <div className="card" style={{width: "18rem"}}>
         <img className="card-img-top" src={details.picture?.large} alt="Card image cap" />

         <div className="card-body">
             <h5 className="card-title">{details.name?.first} - {details.phone}</h5>
             <p className="card-text"> {details.location?.country} <br/> {details.location?.city} <br/> {details.location?.state}<br/>{details.location?.postcode}<br/>{details.email}<br/> </p>
             <a href="#" className="btn btn-primary">go rajasthan</a>
         </div>
        </div>
    </div>
  )
}
// function Cards({myimg,name,btnurl,btn}) {
//   return (
//     <div>
//         <div className="card" style={{width: "18rem"}}>
//          <img className="card-img-top" src={myimg} alt="Card image cap" />

//          <div className="card-body">
//              <h5 className="card-title">{name}</h5>
//              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//              <a href={btnurl} className="btn btn-primary">{btn}</a>
//          </div>
//         </div>
//     </div>
//   )
// }

export default Cards;

