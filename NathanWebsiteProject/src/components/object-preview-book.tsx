//book file name
//book title
//book desc

import "../styles/textstyles.css"
import "../styles/object-preview-book.css"

interface ObjectPreviewBook_props {
    given_bookFilePath: string
    given_bookTitle: string
    given_bookDesc: string
    given_index: number
}

export default function ObjectPreviewBook(props: ObjectPreviewBook_props) {

    function RenderBookPreview() {
        if (props.given_index % 2 == 0) {
            return (
                <div className="holder-book-preview">
                    <div className="holder-book-preview-text">
                        <div className="custom-text-subtitle" >
                            {props.given_bookTitle}
                        </div>
                        <div className="custom-text-body">
                            {props.given_bookDesc}
                        </div>
                    </div>
                    <img src={props.given_bookFilePath} className="holder-image" />
                </div>
            )
        }
        else {
            return (
                <div className="holder-book-preview">
                    <img src={props.given_bookFilePath} className="holder-image" />
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
    }

    return ( <>
        {RenderBookPreview()}
    </>
    )
    
}