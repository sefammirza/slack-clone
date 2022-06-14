import React from 'react'
import styled from 'styled-components'
import { db } from '../firebase'
import { addDoc } from 'firebase/firestore'
import { collection } from "firebase/firestore";
/* import {useCollection} from "react-firebase-hooks/firestore" */

function SidebarOption({Icon, title, addChannelOption}) {

    /* const [channels, loading, error] = collection(db, "rooms") */
    

    const addChannel = () => {
        const channelName = prompt('Please enter the channel Name')
        if (channelName) {
        const usersCollectionRef =  collection(db, 'rooms')
        addDoc(usersCollectionRef, {name:channelName})
            /* db.collection('rooms').add({
                name:channelName,
            });
            console.log('channelName', channelName) */
        }
       
      
       
    }

    const selectChannel = () => {

    }

  return (
      <SidebarOptionContainer onClick={addChannelOption ? addChannel : selectChannel}>
          {Icon && <Icon fontSize="small" style={{padding:10}} />}
          {Icon ? (
              <h3>{title}</h3>
          ): (
              <SidebarOptionChannel>
                  <span>#</span>{title}
              </SidebarOptionChannel>
          )}
      </SidebarOptionContainer>
  )
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
display: flex;
font-size: 12px;
align-items: center;
padding-left:2px;
cursor: pointer;

:hover{
    opacity: 0.9;
    background-color: #340e36;
}

> h3 {
    font-weight: 500;
}

> h3 > span {
    padding: 15px;
}
`

const SidebarOptionChannel = styled.div`

`