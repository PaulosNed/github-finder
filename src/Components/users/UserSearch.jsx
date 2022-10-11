import React, { useContext, useState } from 'react'
import { AlertContext } from '../../Context/alert/AlertContext'
import { UserContext } from '../../Context/github/GithubUserContext'

function UserSearch() {
    const [text, setText] = useState('')
    const {users, searchUsers, clearUsers} = useContext(UserContext)
    const {setAlert} = useContext(AlertContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text === ''){
            setAlert("Please enter a name", "error")
        } else{
            searchUsers(text)
            setText('')
        }
    }

  return (
    <div className='grid grid-col-1 md:grid-cols-2 gap-8 mb-8'>
        <form onSubmit={handleSubmit}>
            <div className='form-control'>
                <div className="relative">
                    <input 
                        type="text"
                        placeholder='seacrh'
                        className='w-full pr-40 bg-gray-200 input input-lg text-black rounded-r-none'
                        value={text}
                        onChange= {(e) => setText(e.target.value)}
                    />
                    <button type='submit' className='absoulte top-0 right-0 rounded-l-none w-36 btn btn-lg'>GO</button>
                </div>
            </div>
        </form>
        <div>
            {users.length!==0 && <button className='btn btn-ghost btn-md' onClick={clearUsers}>CLEAR</button>}
        </div>
    </div>
  )
}

export default UserSearch