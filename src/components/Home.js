import React from 'react'

const Home =({isLogin})=>{
    return (
        <div>
            {!isLogin ? 'Unlock Interesting stuff after login': 'welcome to Home'}
        </div>
    )
}

export default Home;