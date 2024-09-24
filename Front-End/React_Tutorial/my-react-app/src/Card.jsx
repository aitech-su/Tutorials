import profilePic from './assets/profile.png'

function Card(){
    const styles = {
        card:{
            border: "1px solid rgb(245, 240, 240)",
            borderRadius:  "10px",
            boxShadow: "3px 3px 3px #221b1b",
            padding: "20px",
            margin: "10px",
            textAlign: "center",
            maxWidth: "250px",
            display: "inline-block",
        },
        cardImage:{
            maxWidth: "100%",
        },
        cardTitle:{
            fontFamily: "Arial, Helvetica, sans-serif",
        },
        
        cardText:{
            fontFamily: "Arial, Helvetica, sans-serif",
        },
        
    }

    return(
        <div style={styles.card}>
            <img style={styles.cardImage} src={profilePic} alt="profile picture" />
            <h2 style={styles.cardTitle}>QQ</h2>
            <p style={styles.cardText}>I play games</p>
        </div>
    );
    
}

export default Card
























