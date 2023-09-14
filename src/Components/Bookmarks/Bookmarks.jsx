import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="w-1/3 bg-gray-200 text-center ml-3 mt-4 p-4 rounded-xl">
            <div>
                <h3 className='text-3xl bg-yellow-200 rounded-xl p-2 mb-2'>Reading Time: {readingTime} </h3>
            </div>
            <h2 className="text-3xl bg-pink-200 rounded-xl p-2">Bookmarked Blogs: {bookmarks.length} </h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark                 
                bookmark= {bookmark}
                key={idx}
                ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;