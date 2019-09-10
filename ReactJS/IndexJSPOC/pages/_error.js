import React from 'react';
import Link from 'next/link';

const errorIndex = ()=>{
    return (
        <div>
            <h1>Opps Error!</h1>
            <Link href="/"><a>Go back!</a></Link><br />
        </div>
    )
}
export default errorIndex;