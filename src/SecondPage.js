import { useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router-dom";

function Table(props) {
    return (
        <div >
            <h3>Table</h3>
            <h1>{props.name}</h1>
        </div>
    )
}

export default function SecondPage(props) {
    const [clicked, setClick] = useState("none");
    const [type,setType] = useState("")
    const handleLoansClick = () => {
        setType('loans');
        setClick('block');

    }
    const handleCDeplick = () => {
        setType('depos');
        if(clicked === 'none'){
            setClick('block');
        }
    }
    const handleThreeClick = () => {
        setType('three');
        if(clicked === 'none'){
            setClick('block');
        }
    }
    const handleClear = () => {
        setClick("none");
    }
    let history = useHistory();
    const handleBackClick = () => {
        history.push('/')
    }
    let location = useLocation();
    // console.log(location.state.state,location.state.type);
    useEffect(()=>{
        if(location.state.state === 'clicked'){
            setType(location.state.type)
            setClick('block');
        }
    },[]);
    return (
        <div >
            <button onClick={handleBackClick}>Go Back</button>
            <br />

            <h1>SecondPage</h1>
            <br />
            <button onClick={handleLoansClick}>
                loans
            </button>
            <button onClick={handleCDeplick}>
                Deposit
            </button>
            <button onClick={handleThreeClick}>
                Three
            </button>
            <hr />
            <div style={{display:clicked}}>
                <Table name={type}/>
                <button onClick={handleClear}>Clear</button>
            </div>

        </div>
    )
}