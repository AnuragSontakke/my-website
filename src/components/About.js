import React from 'react'

const About =({isLogin})=>{
    return (
        <div>
            {!isLogin ? 'Unlock Interesting stuff after login': 'What you want to know about me'}
        </div>
    )
}

export default About;