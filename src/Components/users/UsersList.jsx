import { useContext} from "react"
import { UserContext } from "../../Context/github/GithubUserContext"
import Spinner from "../layout/Spinner"
import UserItem from "./UserItem"

function UsersList() {
  const {users, isLoading} = useContext(UserContext)
  if (isLoading){
    return <Spinner />
  } else {
    return (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {users.map((user) => <UserItem key={user.id} user = {user}/>)}
        </div>
  )}
}

export default UsersList