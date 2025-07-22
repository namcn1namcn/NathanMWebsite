/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'
import './styles/textstyles.css'
import './styles/pagestyles.css'
import ObjectPreviewBook from './components/object-preview-book'
import { db, storage } from './lib/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { getDownloadURL, ref } from 'firebase/storage'
import type firebase from 'firebase/compat/app'

let useEffectLock: boolean

const booksRef = collection(db, "books")

type BookItem = { 
    coverPath: string; 
    title: string;
    author: string;
    comments: string;
    timestamp: firebase.firestore.Timestamp
}

function App() {
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(true)
    const [bookList, setBookList] = useState<BookItem[]>([])

    document.body.style.overflow = "hidden";

    function LoadingEnder() {
        setTimeout(function () {
            setLoading(false)
            document.body.style.overflow = "auto"
        }, 500)
    }

    useEffect(() => {

        async function GetData() {
            const bcollection = collection(db, "books")

            const bookSnap = await getDocs(bcollection)

            let tempBook: BookItem

            setLoading(true)

            bookSnap.forEach((book) => {
                getDownloadURL(ref(storage, book.data().cover))
                    .then((url) => {
                        tempBook = {
                            coverPath: url,
                            title: book.data().title,
                            author: book.data().author,
                            comments: book.data().comments,
                            timestamp: book.data().timestamp
                        }

                        setBookList(bookList => ([...bookList, tempBook]))
                    })
            })
        }

        GetData().then(() => {
            console.log('finished')
        }).catch(e => console.error(e))
    }, [])


    return (
        <div className="page-parent" >
            <div style={loading ? { height: "100%"} : { height: 0}} >
                {loading? "Loading" : ""}
            </div>
            <div className="page-header">
                <div className="custom-text-title" >
                    Nathan's Books
                </div>
            </div>
            {bookList.sort((a,b) => a.timestamp < b.timestamp ? 1 : -1)
                    .map((book, bookIndex) => {
                        if (loading && bookIndex == bookList.length - 1) {
                            LoadingEnder()
                        }
                    return (
                        <ObjectPreviewBook key={bookIndex} given_index={bookIndex} given_bookFilePath={book.coverPath} given_bookTitle={book.title} given_bookAuthor={book.author} given_bookDesc={book.comments} />)
                })}
    </div>)
}

export default App
