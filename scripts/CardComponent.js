


export const CardComponent=(props)=>(
<div className="card" style={{ width: '18rem', margin: '5px', width: '200px' }}>
  {console.log(props.resData.info.name)}
  <img style={{borderRadius: '5px', width: '100%'}}  src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+props.resData.info.cloudinaryImageId} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.resData.info.name}</h5>
    <span className="card-text">{props.resData.info.costForTwo}</span>
    <p className="card-text">{props.resData.info.avgRatingString} star</p>
    <p className="card-text">{props.resData.info.price}</p>
    <p className="card-text">{props.resData.info.locality}</p>
    <p className="card-text">{props.resData.info.cuisines.join(', ')}</p>
  </div>
  
</div>  
  );
    



