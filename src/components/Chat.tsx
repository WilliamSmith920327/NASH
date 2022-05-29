import { Link } from "react-router-dom";

const Chat = () => {
    return (
        <form action="#" className="comment-area-box">
            <textarea
                rows={3}
                className="form-control border-0 resize-none"
                placeholder="Write something...."
            ></textarea>
            <div className="p-2 bg-light d-flex justify-content-between align-items-center">
                <div>
                    <Link to="#" className="btn btn-sm px-2 font-16 btn-light">
                        <i className="mdi mdi-account-circle"></i>
                    </Link>
                    <Link to="#" className="btn btn-sm px-2 font-16 btn-light">
                        <i className="mdi mdi-map-marker"></i>
                    </Link>
                    <Link to="#" className="btn btn-sm px-2 font-16 btn-light">
                        <i className="mdi mdi-camera"></i>
                    </Link>
                    <Link to="#" className="btn btn-sm px-2 font-16 btn-light">
                        <i className="mdi mdi-emoticon-outline"></i>
                    </Link>
                </div>
                <button type="submit" className="btn btn-sm btn-dark waves-effect">
                    Send
                </button>
            </div>
        </form>
    )
}

export default Chat;