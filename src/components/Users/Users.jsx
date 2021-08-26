import s from './Users.module.css'

const Users = (props) => {
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <div className={s.userContent}>
                    <div className={s.userFollow}>
                            <img src="https://biographe.ru/wp-content/uploads/2020/02/2332-350x350.png" alt=""/>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollowed</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Followed</button>
                            }
                        </div>
                    </div>
                    <div className={s.userInfo}>
                        {u.name}
                    </div>
                    <div className={s.userLocale}>
                        {u.location.city}
                    </div>
                </div>
            </div>)
        }
    </div>
}
export default Users;