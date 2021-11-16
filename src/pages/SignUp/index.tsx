import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { createUser } from '../../actions/UserActions'

import { Button } from '../../components/Button'
import { CustomInput } from '../../components/CustomInput'

import { SignUpContainer } from './style'

export function SignUp() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    dispatch(createUser(username))

    history.push('/')
  }

  return (
    <SignUpContainer>
      <div className="wrapper">
        <h2>Welcome to CodeLeap network!</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Please enter your username</label>
          <CustomInput 
            customType="normalText" 
            id="username" 
            placeholder="John doe"
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <Button 
            className="save-button" 
            bgColor="black" 
            textType="uppercase" 
            bold
            disabled={!!!username} // !username ? true : false
            style={{ alignSelf: 'flex-end' }}
          >
            enter
          </Button>
        </form>
      </div>
    </SignUpContainer>
  )
}