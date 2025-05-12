import { useState } from 'react'
import users from '../users.js'

export default function Users(){
    const [displayedUsers, setDisplayedUsers] = useState(users);
    function handleChange(event){
        const noUsers = document.getElementById('noUsers').classList;
        const email = event.target.value;
        const filteredUsers = users.filter(user => user.email.startsWith(email));
        setDisplayedUsers(filteredUsers);
        if (email == ""){
            setDisplayedUsers(users);
        }else{
            if(filteredUsers.length === 0){
                noUsers.remove('d-none');
                noUsers.add('d-block');
            }
            else{
                noUsers.remove('d-block');
                noUsers.add('d-none');
            }
        }
        
    }
    return(
        <div style={{minHeight: '100vh'}}>
            <div className="container-fluid" style={{width: '100vw'}}>
                <nav className="navbar navbar-light bg-light form-inline  my-3 justify-content-center">
                    <input className="form-control me-3 w-50" type="search" placeholder="Search for Email" aria-label="Search" onChange={handleChange}/>
                    {/* <button className="btn btn-outline-success" type="button" onClick={handleSearch}>Search</button> */}
                </nav>
            </div>
            <div className="container-fluid">
                <div className="row" >
                    {
                        displayedUsers.map( (user) => (
                                <div className="col-md-4 mb-4" key={user.id}>
                                    <div className="card border-0 shadow" style={{width: '25rem'}}>
                                    <div className='w-100 justify-content-center'>
                                        <img src={user.image} className="img-fluid rounded-circle mx-2 justify-self-center " alt="PersonalPhoto" style={{width: '100px', height: '100px', objectFit: 'cover'}}/>
                                    </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{user.firstName} {user.lastName}</h5>
                                            <div className="card-text">
                                                <p className={`text-white p-2 d-inline-block rounded-3 ${user.role == 'admin' ? 'bg-danger' : user.role == 'moderator' ? 'bg-warning' : user.role == 'user' ? 'bg-success' :''}`}>{user.role}</p>
                                                <p>{user.username}</p>
                                                <p>{user.email}</p>
                                                <p>{user.phone}</p>
                                                <p>{user.birthDate}</p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            
                        ))
                    }
                </div>
                <h3 className='d-none' id='noUsers'>No users found</h3>
            </div>
        </div>
        
    )
}