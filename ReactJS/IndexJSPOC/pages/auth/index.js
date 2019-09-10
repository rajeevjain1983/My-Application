import React from 'react';
import User from '../../components/user';

const authIndex = (props)=>{
    return (
        <div>
            <h1>Auth Index Page {props.appName}</h1>
            <User name='rajeev' age='35' ></User>
        </div>
    )
}

authIndex.getInitialProps=(context)=>{
    var promoise=new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({appName:'Hello! this is the Auth app'})
        }, 2000);
    })

    return promoise;
}
export default authIndex;