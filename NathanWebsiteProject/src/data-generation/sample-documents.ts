/* eslint-disable @typescript-eslint/no-unused-vars */
import { doc, setDoc, type DocumentReference } from "firebase/firestore/lite"

//Deprecated function to populate the firestore database
//Now uses a separate custom website to add individual documents
async function TestPopulate(booksRef: DocumentReference) {

    await setDoc(doc(booksRef, "crimeandpunishment"), {
        cover: "crimeandpunishment.jpg",
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        comments: "Haven't yet read this book"
    })
    await setDoc(doc(booksRef, "crimeandpunishment2"), {
        cover: "crimeandpunishment.jpg",
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        comments: "Haven't yet read this book"
    })
    await setDoc(doc(booksRef, "crimeandpunishment3"), {
        cover: "crimeandpunishment.jpg",
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        comments: "Haven't yet read this book"
    })
}