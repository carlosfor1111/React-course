import { useRef, useContext } from 'react'
import { useHistory } from 'react-router'
import AuthContext from '../../store/auth-context'
import classes from './ProfileForm.module.css'

const ProfileForm = () => {
  const history = useHistory()
  const newPasswordInputRef = useRef()

  const authCtx = useContext(AuthContext)

  const submitHandler = (event) => {
    event.preventDefault()
    const enteredNewPasswrod = newPasswordInputRef.current.value

    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBbCRfRerQPb8rlptOeH50EhentjE4os20',
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPasswrod,
          returnSecureToken: false,
        }),
        header: {
          'Content-Type': 'application/json',
        },
      }
    ).then((res) => {
      history.replace('/')
    })
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  )
}

export default ProfileForm
