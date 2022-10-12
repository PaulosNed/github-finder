import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {  GrCheckmark, GrClose } from 'react-icons/gr'
import { UserContext } from '../../Context/github/GithubUserContext'
import Spinner from '../layout/Spinner'
import RepoList from '../repos/RepoList'

function Profile() {
    const params = useParams()
    const {user, getUser, isLoading, repos, getUserRepos} = useContext(UserContext)

    useEffect(() => {
        getUser(params.login)
        getUserRepos(params.login)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if (isLoading){
        return <Spinner />
    } else{
        return (
            <div className="mx-auto md:max-w-5xl mt-6 min-w-0 break-words shadow-lg bg-neutral w-full mb-6 rounded-xl mt-16">
            <div className="px-6">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full flex justify-center">
                        <div className="">
                            <img src={user.avatar_url} className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]" alt='not working'/>
                        </div>
                    </div>
                    <div className="w-full text-center mt-20">
                        {/* <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                            {user.location && (<div className="p-3 text-center">
                                <span className="text-xl font-bold block tracking-wide text-neutral-content">{user.location}</span>
                                <span className="text-sm text-neutral-content">Location</span>
                            </div>)}
                            {user.blog &&(<div className="p-3 text-center">
                                <span className="text-xl font-bold block tracking-wide text-neutral-content"><a href={`https://${user.blog}`} target="_blank">{user.blog}</a></span>
                                <span className="text-sm text-neutral-content">Website</span>
                            </div>)}
        
                            <div className="p-3 text-center">
                                <span className="text-xl font-bold block tracking-wide text-neutral-content">564</span>
                                <span className="text-sm text-neutral-content">Following</span>
                            </div>
                        </div> */}
                        <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                            {user.hireable &&(<div className="p-3 text-center">
                                <span className="text-2xl font-bold block tracking-wide text-neutral-content">{
                                        user.hireable? <GrCheckmark style={{backgroundColor: "green", fontSize: 28, marginLeft: 8, borderRadius: 15}}/> : <GrClose className='rounded' style={{backgroundColor: "red", fontSize: 28, marginLeft: 8, borderRadius: 15}}/>
                                    }</span>
                                <span className="text-sm text-neutral-content">{user.hireable===true ? "Hireable" : "Hired"}</span>
                            </div>)}
                            <div className="p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-neutral-content">{user.followers}</span>
                                <span className="text-sm text-neutral-content">Followers</span>
                            </div>
        
                            <div className="p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-neutral-content">{user.following}</span>
                                <span className="text-sm text-neutral-content">Following</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="text-center mt-2">
                    <h3 className="text-2xl text-neutral-content font-bold leading-normal mb-1">{user.name}</h3>
                    <div className="text-xs mt-0 mb-2 text-neutral-content font-bold">
                        <i className="fas fa-map-marker-alt mr-2 text-neutral-content opacity-75"></i>{user.login}
                    </div>
                </div>
                <div className="mt-6 py-6 border-t border-slate-200 text-center">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4">
                            <p className="font-light leading-relaxed text-neutral-content mb-4">{user.bio}</p>
                            <a href={user.html_url} target="_blank" rel="noreferrer" className="font-normal text-neutral-content btn btn-outline">Visit Profile</a>                    </div>
                    </div>
                </div>
                <hr />
                <RepoList repos={repos} />
            </div>
        </div>
        )
    }
}

export default Profile