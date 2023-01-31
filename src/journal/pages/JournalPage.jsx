
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IconButton, Typography } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { AddOutlined } from '@mui/icons-material'
import { startNewNote } from '../../store/journal'

export const JournalPage = () => {

  const { isSaving,active } = useSelector((state) => state.journal );
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }

  return (
    <JournalLayout>
      
      {/* <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis quo officiis minus provident aperiam error in esse sit itaque rerum corporis, temporibus neque dolorem reprehenderit ipsum modi minima dolorum nesciunt.</Typography> */}

      {
        (!!active)
          ? <NoteView /> 
          : <NothingSelectedView />
      }

      <IconButton 
        onClick={onClickNewNote}
        disabled={isSaving}
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
