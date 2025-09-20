export const PostContent = ({ content, date }) => {
    return (
        <div className="text-gray-300 mt-2">
            <p>{content}</p>
            <p className="text-gray-500 mt-2">Published: {date}</p>
        </div>
    );
};
