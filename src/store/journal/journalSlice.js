import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
   name: 'journal',
   initialState: {
      isSaving:false,
      messageSaved:'',
      notes:[],
      active:null
    //   active: {
    //     id:'abc',
    //     title:'',
    //     body:'',
    //     date:1234567,
    //     imageUrl:[], //https://fotos1.jpg, https://fotos2.jpg, https://fotos3.jpg, 
    //   }
   },
   reducers: {
       savingNewNote: (state)=>{
        state.isSaving=true;
       },
       addNewEmptyNote: (state,  action ) => {
         state.notes.push(action.payload);
         state.isSaving=false;
       },
       setActiveNote: (state,  action ) => {
         state.active=action.payload;
       },
       setNote: (state,  action ) => {
         
       },
       setSaving: (state ) => {
         
       },
       updateNote: (state,  action ) => {
         
       },
       deleteNoteById: (state,  action ) => {
         
       },
   }
});


// Action creators are generated for each case reducer function
export const { 
    addNewEmptyNote,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNote,
    setSaving,
    updateNote,
} = journalSlice.actions;