import PropTypes from "prop-types";

export default function University({university,handleDelete}){
    return (

        <a href={`http://localhost:5173/${university.id}`} className="link-offset-2  link-underline link-underline-opacity-0" style={{marginTop: "130px"}}>
            <div className="fs-1 text-center">Result of request</div>
            <div className="card h-100">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-aSIpvSnnSGTMx1Qz6bW7jNYA8a7bMu42g&usqp=CAU"
                    className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{university.name}</h5>
                    <div className="card-text">{university.text}</div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-danger" onClick={()=>handleDelete(university.id)} >Delete</button>
                </div>
            </div>
        </a>
    )
}

University.propTypes={
    university: PropTypes.shape({
        id:PropTypes.number,
        name:PropTypes.string,
        text:PropTypes.string,

    })
}