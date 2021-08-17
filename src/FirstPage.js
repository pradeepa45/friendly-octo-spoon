import { withRouter } from "react-router-dom";

function FirstPage(props){

    const handleLoansClick = () => {
        props.history.push('/sec',{state : 'clicked',type : 'loans'});
        // console.log(props.history)

    }
    const handleDeposClick = () => {
        props.history.push('/sec',{state : 'clicked',type : 'depos'});
        // console.log(props.history)

    }
    const handleThreeClick = () => {
        props.history.push('/sec',{state : 'clicked',type : 'three'});
        // console.log(props.history)

    }
    
    return(
        <div >
            FirstPage
            <button onClick={handleLoansClick}>Loans</button>
            <button onClick={handleDeposClick}>Deposit</button>
            <button onClick={handleThreeClick}>Three</button>
        </div>
    )
}

export default withRouter(FirstPage);