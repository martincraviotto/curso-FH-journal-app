
import React from 'react'
import { IconButton, Typography } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { AddOutlined } from '@mui/icons-material'

export const JournalPage = () => {
  return (
    <JournalLayout>
      
      {/* <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis quo officiis minus provident aperiam error in esse sit itaque rerum corporis, temporibus neque dolorem reprehenderit ipsum modi minima dolorum nesciunt.</Typography> */}

      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton 
        size='large'
        sx={{
            color: 'white',
             backgroundColor:'error.main',
             ':hover' : {backgroundColor:'error.main', opacity:0.9},
             position: 'fixed',
             right: 50,
             bottom:50
            }}
      >
          <AddOutlined sx={{fontSize:30}}/>

      </IconButton>


    </JournalLayout>
    
  )
}
