/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, type ChangeEvent } from 'react'
import './App.css'
import './styles/main-page-styles.css'
import { Button } from 'react-bootstrap'
import { collection, setDoc, doc } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage'
import { db, storage } from './lib/firebase'

function App() {
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [comments, setComments] = useState<string>('');
    const [image, setImage] = useState<File>();

    const booksRef = collection(db, "books")

    async function PushData() {
        await upload()
        await setDoc(doc(booksRef, title), {
            cover: image?.name,
            title: title,
            author: author,
            comments: comments
        })
    }


    const upload = () => {
        if (image == null)
            return;
        const storageRef = ref(storage, image.name);
        uploadBytes(storageRef, image)

    }


    return (
        <div>
            <div className="title">
                Uploader
            </div>
            <div className="page-parent">
                <div className="input-block">
                    Title
                    <input className="text-input" value={title} type="text" placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="input-block">
                    Author
                    <input className="text-input" value={author} type="text" placeholder="Author"
                        onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div className="input-block">
                    Cover Image
                    <input type="file"
                        onChange={(e) => { setImage(e.target.files![0]); }} />
                </div>
                <div className="input-block">
                    Comments
                    <textarea className="text-area" value={comments} placeholder="Comments"
                        onChange={(e) => setComments(e.target.value)} />
                </div>
                <Button onClick={() => { PushData() }} >
                    Submit Book
                </Button>
            </div>
        </div>

    )
}

export default App
