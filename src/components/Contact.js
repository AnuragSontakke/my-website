import React from 'react'

const Contact =({isLogin})=>{
    return (
        <div>
            {!isLogin ? 'Unlock Interesting stuff after login': 'No Contacts'}
        </div>
    )
}

export default Contact;