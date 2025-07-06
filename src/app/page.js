"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Raksmey Chann",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      content:
        "Just finished building this amazing Jenkins app! 🚀 The CI/CD pipeline is working perfectly and deployment is automated. What a great day for development!",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      likes: 42,
      comments: 8,
      shares: 3,
      timestamp: "2 hours ago",
      isLiked: false,
    },
    {
      id: 2,
      author: "Jak Wilson",
      avatar:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      content:
        "Team meeting went great today! We discussed the new features for our Jenkins integration. Everyone is excited about the upcoming release. #Jenkins #DevOps #TeamWork",
      likes: 28,
      comments: 12,
      shares: 5,
      timestamp: "4 hours ago",
      isLiked: true,
    },
    {
      id: 3,
      author: "Mike Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      content:
        "Finally got the automated testing working with Jenkins! No more manual deployments. The build process is now completely streamlined. 🎉",
      likes: 56,
      comments: 15,
      shares: 7,
      timestamp: "6 hours ago",
      isLiked: false,
    },
  ]);

  const [newPost, setNewPost] = useState("");

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            isLiked: !post.isLiked,
          };
        }
        return post;
      })
    );
  };

  const handleNewPost = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: "You",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face",
        content: newPost,
        likes: 0,
        comments: 0,
        shares: 0,
        timestamp: "Just now",
        isLiked: false,
      };
      setPosts([post, ...posts]);
      setNewPost("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">J</span>
              </div>
              <h1 className="text-xl font-bold text-gray-800">
                Newsfeed Songkran
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5 5v-5z"
                  />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5 5v-5z"
                  />
                </svg>
              </button>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Create Post */}
        <div className="bg-white rounded-lg shadow-sm   p-4 mb-6">
          <form onSubmit={handleNewPost} className="flex space-x-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div className="flex-1">
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="What's on your mind?"
                className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="3"
              />
              <div className="flex justify-between items-center mt-3">
                <div className="flex space-x-2">
                  <button
                    type="button"
                    className="flex items-center space-x-1 text-gray-500 hover:bg-gray-100 px-3 py-1 rounded-lg"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Photo</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center space-x-1 text-gray-500 hover:bg-gray-100 px-3 py-1 rounded-lg"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Feeling</span>
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={!newPost.trim()}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-sm  ">
              {/* Post Header */}
              <div className="p-4 border-b">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">
                      {post.author}
                    </h3>
                    <p className="text-sm text-gray-500">{post.timestamp}</p>
                  </div>
                  <button className="p-1 hover:bg-gray-100 rounded-full">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-4">
                <p className="text-gray-900 mb-4">{post.content}</p>
                {post.image && (
                  <div className="rounded-lg overflow-hidden mb-4">
                    <img
                      src={post.image}
                      alt="Post"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Post Stats */}
              <div className="px-4 py-2 border-t border-gray-100 bg-gray-50">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-2 h-2 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>{post.likes} likes</span>
                  </div>
                  <div className="flex space-x-4">
                    <span>{post.comments} comments</span>
                    <span>{post.shares} shares</span>
                  </div>
                </div>
              </div>

              {/* Post Actions */}
              <div className="px-4 py-2 border-t border-gray-100">
                <div className="flex space-x-1">
                  <button
                    onClick={() => handleLike(post.id)}
                    className={`flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg font-medium transition-colors ${
                      post.isLiked
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill={post.isLiked ? "currentColor" : "none"}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <span>Like</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg font-medium text-gray-500 hover:bg-gray-100 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <span>Comment</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg font-medium text-gray-500 hover:bg-gray-100 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                      />
                    </svg>
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
