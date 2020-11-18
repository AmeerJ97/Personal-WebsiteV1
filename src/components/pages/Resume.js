import React from 'react';
import '../../App.css';


export default function Resume(){
    return <h1 className='resume'> 
    {/* <embed src="/files/AmeerOsmanCV.pdf" width="960" height="1050px" /> */}
    <object data="/files/AmeerOsmanCV.pdf" type="application/pdf" width="960px" height="1050px">
    <a href="/files/AmeerOsmanCV.pdf">test.pdf</a>
    </object>
    </h1>
    
}
