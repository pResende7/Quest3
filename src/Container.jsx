import "./Container.css";

function Container({number, text}){
	
	return( 
		<div className='base'>
		<p className='numero'>{number}</p>
		 <h5 className='texto'>{text}</h5>
		 </div>
	);
}

export default Container;
