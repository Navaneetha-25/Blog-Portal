export const PostTitle = ({ title, onClick }) => {
    return (
        <h2
            className="text-xl font-bold cursor-pointer hover:underline text-indigo-200"
            onClick={onClick}
        >
            {title}
        </h2>
    );
};
