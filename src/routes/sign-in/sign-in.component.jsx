
import {signInWithGooglePopup ,createUserDocFromAuth} from '../../utils/firebase/firebase.utils'

const SignIn = () => {

    const loggogoleUser = async()=>{
        const {user} = await signInWithGooglePopup();
        // console.log(user);
        createUserDocFromAuth(user);
    } 

return(
    <div>
        <h1>SIGN IN PAGE</h1>
        <button onClick={loggogoleUser}>sign in with google </button>
    </div>
)

}


export default SignIn