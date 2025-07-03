/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'
import './styles/textstyles.css'
import './styles/pagestyles.css'
import ObjectPreviewBook from './components/object-preview-book'
import { Button } from 'react-bootstrap'
import { db, storage } from './lib/firebase'
import { collection, query, where, doc, setDoc, getDocs } from "firebase/firestore"
import { getBlob, getDownloadURL, ref } from 'firebase/storage'

let useEffectLock: boolean

const booksRef = collection(db, "books")

type BookItem = { 
    coverPath: string; 
    title: string;
    author: string;
    comments: string;
}

function App() {
    const [count, setCount] = useState(0)

    const [bookList, setBookList] = useState<BookItem[]>([])

    async function GetData() {

        const bcollection = collection(db, "books")

        const bookSnap = await getDocs(bcollection)

        let tempBook: BookItem
        const tempBookArray: BookItem[] = []
        let tempCoverPath: string


        bookSnap.forEach((book) => {
            getDownloadURL(ref(storage, book.data().cover))
                .then((url) => {
                    tempBook = {
                        coverPath: url,
                        title: book.data().title,
                        author: book.data().author,
                        comments: book.data().comments,
                    }
                    tempBookArray.push(tempBook)
                })
        })
        setBookList(tempBookArray)
    }

    useEffect(() => {
        GetData().then(() => {
            console.log('finished');
        })
    }, [])


  return (
    <div className="page-parent" >
        <div className="custom-text-title" >
              List View
          </div>

          {bookList.map((book, bookIndex) => { return (<ObjectPreviewBook key={bookIndex} given_index={bookIndex} given_bookFilePath={book.coverPath} given_bookTitle={book.title} given_bookDesc={book.comments} />) } ) }
        
    </div>
  )
}

export default App
