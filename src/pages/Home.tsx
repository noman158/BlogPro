import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { formatDistanceToNow } from 'date-fns';
import { Clock, Tag, User } from 'lucide-react';

export default function Home() {
  const { posts, loading } = useSelector((state: RootState) => state.posts);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>BlogPro - Modern Blogging Platform</title>
        <meta
          name="description"
          content="Discover amazing stories and insights from our community of writers."
        />
      </Helmet>

      <div className="space-y-10">
        <section className="text-center py-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to BlogPro</h1>
          <p className="text-xl mb-8">Discover amazing stories and insights.</p>
          <Link
            to="/write"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Start Writing
          </Link>
        </section>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {post.featuredImage && (
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {formatDistanceToNow(new Date(post.createdAt), {
                      addSuffix: true,
                    })}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author.name}
                  </div>
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  <Link
                    to={`/post/${post.slug}`}
                    className="text-gray-900 hover:text-blue-600"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.summary}</p>
                <div className="flex items-center space-x-2">
                  <Tag className="w-4 h-4 text-gray-400" />
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}