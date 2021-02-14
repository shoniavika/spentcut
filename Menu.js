'use strict'

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }
    
    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLogged = document.getElementsByTagName('script')[0].classList[0]
        console.log(isLogged)
        return (
            <>
                <a href="aboutus.html">About Us</a>
                <a href="contacts.html">Contacts</a>
                
                {isLogged == "1"
                ? <a href="profile.html">Profile</a>
                : <a href="login.html">Log In</a>   
                }
            </>
        )
    }
}