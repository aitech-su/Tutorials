import './Button.module.css'

function Button(){

    const handleClick = () => {
        console.log("OUCH!");
    }

    const handleClick2 = (name) => {
        console.log(`${name} stop clicking me`);
    }

    const handleClick3 = (e) => {
        e.target.textContent = "OUCH !";
    }

    const handleClick4 = (e) => {
        e.target.style.display = "none";
    }

    // function with param will exec immediately, so we should use {() => {}} 
    // to make sure function only exec when clicked

    return (
        <>
            <button onClick={() => handleClick("Protugal")} className="button">Click me</button>
            <button onDoubleClick={(e) => handleClick3(e)} className="button">Click me</button>
        </>
    );
}

export default Button