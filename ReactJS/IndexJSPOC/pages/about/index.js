import React from 'react';
import Link from 'next/link';
import withLayout from '../../components/withLayout'
const aboutIndex = (props)=>{
    return (
        <div>
            <h1>About Page</h1>
            <Link href='\'><a>Go to back</a></Link>
          
        </div>
    )
}
export default withLayout(aboutIndex);