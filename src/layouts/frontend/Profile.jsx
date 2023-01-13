import React from 'react'

function Profile() {
  return (
   <Container>
       {user.map(item => (
          <Product item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Profile
