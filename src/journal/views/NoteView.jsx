import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SaveOutlined, SettingsEthernet } from '@mui/icons-material';
import {Button, Grid, TextField, Typography } from '@mui/material';
import { useForm } from '../../hooks/useForm';
import { ImageGallery } from '../components';
import { setActiveNote, startSaveNote } from '../../store/journal';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {

    const dispatch = useDispatch();

    const {active:note,messageSaved, isSaving} =useSelector(state=>state.journal);

    const {body, title, date, onInputChange, formState} =useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date]);

    useEffect(() => {
      dispatch(setActiveNote(formState));
    
    }, [formState])
    
    useEffect(() => {        
      if( messageSaved.length > 0)
        Swal.fire('Nota Actualizada', messageSaved, 'success');
    }, [messageSaved])
    


    const onSaveNote = () => {
        dispatch(startSaveNote()); 
    }

  return (
    <Grid 
        className='animate__animated animate__backInLeft animate_faster'
        container 
        direction='row' 
        justifyContent='space-between' 
        alignItems='center' 
        sx={{mb:1}}
    >
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
        </Grid>

        <Grid item>
            <Button 
                disabled={ isSaving}
                onClick={ onSaveNote }
                color='primary' 
                sx={{padding:2}}
            >
                <SaveOutlined sx={{fontSize:30, mr:1}} />
                Guardar
            </Button>
        </Grid>

        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb:1}}>
            <TextField 
                type='text'
                variant='filled'
                fullWidth
                placeholder='Ingrese un título'
                label='Titulo'
                sx={{border:'none', mb:1}}
                name="title"
                value={title}
                onChange={onInputChange}
            />

            <TextField 
                type='text'
                variant='filled'
                fullWidth
                multiline
                placeholder='¿Qué sucedió en el día de hoy?'                
                minRows={5}
                name="body"
                value={body}
                onChange={onInputChange}
            />

            <ImageGallery />

        </Grid>    
    </Grid>



  )
}
