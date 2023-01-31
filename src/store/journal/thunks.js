import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "./journalSlice";


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