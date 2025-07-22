/* eslint-disable @typescript-eslint/no-unused-vars */
//book file name
//book title
//book desc

import "../styles/textstyles.css"
import "../styles/object-preview-book.css"
import { useState } from "react"
import Cookie from "universal-cookie"

interface ObjectPreviewBook_props {
    given_bookFilePath: string
    given_bookTitle: string
    given_bookAuthor: string
    given_bookDesc: string
    given_index: number
}

export default function ObjectPreviewBook(props: ObjectPreviewBook_props) {

    const cookies = new Cookie(null, { path: "/" })

    const nameCondenser = props.given_bookTitle.replace(/\s+/g, '');

    const cookieName = `${nameCondenser}Liked`
    console.log(cookies.get(cookieName))
    const [liked, setLiked] = useState<boolean>()

    function ClickLike() {
        cookies.set(cookieName, !liked)
        setLiked((liked) => liked = !liked)
    }

    function RenderBookPreview() {
        if (liked != cookies.get(cookieName)) {
            setLiked((liked) => cookies.get(cookieName))
        }
        if (props.given_index % 2 == 1) {
            return (
                <div className="book-preview">
                    <div className="book-non-image">
                        <div className="book-upper">
                            <div className="title-author-block">
                                <div className="book-title" >
                                    {props.given_bookTitle}
                                </div>
                                <div className="book-author">
                                    By {props.given_bookAuthor}
                                </div>
                            </div>
                            <div>
                                <button className={liked ? "like-button-green" : "like-button-grey"} onClick={ClickLike}>
                                    {liked ? "Liked" : "Like"}
                                </button>
                            </div>

                        </div>
                        <div className="book-lower">
                            <div className="book-desc">
                                {props.given_bookDesc}
                            </div>
                        </div>
                    </div>
                    <img src={props.given_bookFilePath} className="cover-image" />
                </div>
            )
        }
        else {
            return (
                <div className="book-preview" style={props.given_index == 0 ? { borderRadius: "10px 10px 0px 0px" } : {borderRadius: "0px" } }>
                    <img src={props.given_bookFilePath} className="cover-image" />
                    <div className="book-non-image">
                        <div className="book-upper">
                            <div className="title-author-block">
                                <div className="book-title" >
                                    {props.given_bookTitle}
                                </div>
                                <div className="book-author">
                                    By {props.given_bookAuthor}
                                </div>
                            </div>
                            <div>
                                <button className={liked ? "like-button-green" : "like-button-grey"} onClick={ClickLike}>
                                    {liked ? "Liked" : "Like"}
                                </button>
                            </div>

                        </div>
                        <div className="book-lower">
                            <div className="book-desc">
                                {props.given_bookDesc}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return ( <>
        {RenderBookPreview()}
    </>
    )
    
}