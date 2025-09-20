import React, { useState } from "react";
import BlogPost from "./BlogPost";
import SearchBar from "./SearchBar";

const posts = [
    {
        id: 1,
        title: "Why React is so Popular?",
        content:"React's component-based architecture makes UI development more organized and reusable. With hooks and virtual DOM, it’s lightweight and super fast.",
        author: "Anita Sharma",
        date: new Date().toDateString(),
    },
    {
        id: 2,
        title: "The Power of Hooks",
        content:"Hooks like useState and useEffect allow developers to manage state and lifecycle methods in functional components without writing classes.",
        author: "Rahul Mehta",
        date: new Date().toDateString(),
    },
    {
        id: 3,
        title: "Styling in React",
        content:"From plain CSS and CSS modules to styled-components and Tailwind, React gives developers flexibility to choose their styling approach.",
        author: "Priya Singh",
        date: new Date().toDateString(),
    },
];

export default function BlogList() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-indigo-400 text-center">
                React Blog Portal
            </h1>
            <SearchBar
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                    <BlogPost
                        key={post.id}
                        post={post}
                        relatedPosts={posts.filter((p) => p.id !== post.id)}
                    />
                ))
            ) : (
                <p className="text-center text-gray-400 mt-4">
                    No posts found.
                </p>
            )}
        </div>
    );
}
