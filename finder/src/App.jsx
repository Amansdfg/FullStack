import {useState,useEffect} from "react";
import NavBar from "./NavBar.jsx";
import AddUni from "./AddUni.jsx";
import {BrowserRouter as Router ,Routes ,Route,useParams} from "react-router-dom";
import UniList from "./UniList.jsx";
import University from "./University.jsx";
export default function App(){
    const[universities,setUniversities] =useState([]);
    const[filteredUniversities,setFilteredUniversities]=useState([]);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState('');
    const uni=(id)=> {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            fetch("http://localhost:8080/universities?page="+id, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network Error");
                    }
                    return response.json()
                })
                .then(data => {
                    setUniversities(data);
                    setFilteredUniversities(data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                })
        }, [])
    }
    uni(0)
    const handleDelete = (id)=> {
        fetch(`http://localhost:8080/universities/${id}`,{
            method:"DELETE",
            headers:{"Content-Type" :"application/json"},
        })
            .then((response)=> {
                if (!response.ok) {
                    throw new Error("ERROR");
                }
            })
            .catch(error=>{
                setError(error);
            })
        const unis= filteredUniversities.filter((uni)=>(id!==uni.id));
        setFilteredUniversities(unis);
    }
    if(loading){
        return <div className="d-flex justify-content-center align-items-center" style={{fontSize:"100px", height: "100vh",width: "100vw"}}>Loading</div>
    }
    if(error){
        return <div className="d-flex justify-content-center align-items-center" style={{fontSize:"100px", height: "100vh",width: "100vw"}}>Error: {error.message}</div>
    }
    const handle = (e)=>{
        const search=e.target.value.toLowerCase();
        const result=universities.filter(uni=>uni.name.toLowerCase().includes(search.toLowerCase()))
        setFilteredUniversities(result);
    }
    return(
        <Router>
            <NavBar handle={handle}/>
            <Routes>
                <Route path="*" element={<NoPage/>} />
                <Route path="/add" element={<AddUni universities={universities} />}/>
                <Route path="/" element={<UniList uni={uni} handleDelete={handleDelete} universities={filteredUniversities}/>}/>
                <Route path="/:id" element={<UniversityDetails handleDelete={handleDelete}/>}/>
                <Route path="/page/:id" element={<UniversityDetails handleDelete={handleDelete}/>}/>
            </Routes>
        </Router>
    )
}
// eslint-disable-next-line react/prop-types
function UniversityDetails({handleDelete}){
    const[university,setUniversity]=useState(null);
    const[loading,setLoading]=useState(true);
    const[error,setError]= useState("");
    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:8000/universities/${id}`,{
            method:"GET",
            headers:{"Content-Type" :"application/json"},
        })
            .then((response)=>{
                if(!response.ok){
                    throw new Error("Network error");

                }
                return response.json();
            })
            .then(data=>{
                setUniversity(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    },[]);

    if(loading){
        return(
            <div className="d-flex justify-content-center align-items-center" style={{fontSize:"100px" , height:"100vh" ,width: "100vw"}}>Loading</div>
        )
    }
    if(error){
        return (
            <div className="d-flex justify-content-center align-items-center" style={{fontStyle:"100px", height:"100vh" , width:"100vw"}}>Error: {error}</div>
        )
    }
    return (
        <University handleDelete={handleDelete} university={university} />
    )
}
function NoPage(){
    return (
        <h1 className="d-flex justify-content-center align-items-center"
             style={{fontStyle: "100px", height: "100vh", width: "100vw"}}>Page not found</h1>
    )
}