

function UserGreeting(props){

    const welcomeMsg =  <h2>
                        Welcome {props.username}
                        </h2>

    const loginPrompt = <h2>
                        Please log in to continue
                        </h2>

    if(props.isLoggedIn){
        return welcomeMsg;
    }else{
        return loginPrompt;
    }
}

export default UserGreeting
