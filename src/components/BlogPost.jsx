import { useState } from "react";
import { PostTitle } from "./PostTitle";
import { PostContent } from "./PostContent";
import { PostAuthor } from "./PostAuthor";

const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "First, solve the problem. Then, write the code.",
    "React is not about pages, it’s about components.",
];

export default function BlogPost({ post, relatedPosts }) {
    const [showContent, setShowContent] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment("");
        }
    };

    return (
        <div className="border rounded-lg p-4 shadow mb-6 bg-gray-800">
            <PostTitle
                title={post.title}
                onClick={() => setShowContent(!showContent)}
            />
            <PostAuthor author={post.author} />

            {showContent && (
                <div className="mt-3">
                    <blockquote className="italic text-indigo-300 mb-2">
                        {randomQuote}
                    </blockquote>
                    <PostContent content={post.content} date={post.date} />

                    {/* Related posts */}
                    <div className="mt-4">
                        <h4 className="font-semibold">Related Posts:</h4>
                        <ul className="list-disc ml-6 text-indigo-400">
                            {relatedPosts.map((rp) => (
                                <li key={rp.id}>{rp.title}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Comments */}
                    <div className="mt-4">
                        <h4 className="font-semibold">Comments:</h4>
                        <ul className="list-disc ml-6 text-gray-300">
                            {comments.map((c, i) => (
                                <li key={i}>{c}</li>
                            ))}
                        </ul>
                        <form
                            onSubmit={handleCommentSubmit}
                            className="mt-4 flex gap-2"
                        >
                            <input
                                type="text"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Add a comment..."
                                className="border p-2 flex-1 rounded text-black"
                            />
                            <button
                                type="submit"
                                className="bg-indigo-600 text-white px-4 py-2 rounded"
                            >
                                Add
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
