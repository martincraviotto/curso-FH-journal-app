import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setSaving, updateNote } from "./journalSlice";
import { loadNotes } from "../../helpers";
import { setNote } from "./journalSlice";



export const startNewNote = () => {
    return async(dispatch, getState) =>{

        dispatch(savingNewNote());
        const {uid} = getState().auth;
        //uid
        const newNote={
            title:'',
            body:'',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB ,`${uid}/journal/notes` ) );
        const setDocRes = await setDoc(newDoc,newNote);

        //le creo la propiedad id y le asigno la devuelta luego de la inserción.
        newNote.id= newDoc.id;

        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}

export const startLoadingNotes = () => {
    return async (dispatch,getState) =>{
        const {uid} = getState().auth;
        if(!uid)throw new Error('El UID del usuario no existe');

        const notes = await loadNotes(uid);
        dispatch(setNote(notes));
    }
}

export const startSaveNote = () => {
    return  async (dispatch,getState) => {

        dispatch(setSaving());

        const {uid} = getState().auth;
        if(!uid)throw new Error('El UID del usuario no existe'); 

        const {active:note} = getState().journal;

        const noteToFireSotre = {...note};
        delete noteToFireSotre.id;
        
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await setDoc(docRef, noteToFireSotre,{merge:true});

        dispatch(updateNote(note));

    }
}
