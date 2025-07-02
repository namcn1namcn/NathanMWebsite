//book file name
//book title
//book desc

import "../styles/textstyles.css"
import "../styles/object-preview-book.css"

interface ObjectPreviewBook_props {
    given_bookFileName: string
    given_bookTitle: string
    given_bookDesc: string

}




export default function ObjectPreviewBook(props: ObjectPreviewBook_props) {



    return (
        <div className="holder-book-preview">
            <img src={`/assets/${props.given_bookFileName}`} className="holder-image" />
            <div className="holder-book-preview-text">
                <div className="custom-text-subtitle" >
                    {props.given_bookTitle}
                </div>
                <div className="custom-text-body">
                    {props.given_bookDesc}
                </div>
            </div>
        </div>
    )
}