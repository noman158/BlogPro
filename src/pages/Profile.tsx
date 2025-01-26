import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Helmet } from 'react-helmet-async';
import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';
import { Clock, Edit, Trash } from 'lucide-react';

export default function Profile() {
  const { user } = useSelector((state: RootState) => state.auth);
  const { posts } = useSelector((state: RootState) => state.posts);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-600">Please log in to view your profile</p>
      </div>
    );
  }

  const userPosts = posts.filter((post) => post.authorId === user.id);

  return (
    <>
      <Helmet>
        <title>Profile - BlogPro</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center space-x-5">
              <div className="flex-shrink-0">
                <img
                  className="h-16 w-16 rounded-full"
                  src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}`}
                  alt={user.name}
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                <p className="text-sm text-gray-500">{user.email}</p>
                <p className="text-sm text-gray-500">
                  Member since{' '}
                  {formatDistanceToNow(new Date(user.createdAt), {
                    addSuffix: true,
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-900">Your Posts</h3>
            <Link
              to="/write"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Write New Post
            </Link>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {userPosts.map((post) => (
                <li key={post.id}>
                  <div className="px-4 py-4 flex items-center sm:px-6">
                    <div className="min-w-0 flex-1">
                      <Link
                        to={`/post/${post.slug}`}
                        className="text-lg font-medium text-blue-600 hover:text-blue-500"
                      >
                        {post.title}
                      </Link>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <Clock className="flex-shrink-0 mr-1.5 h-4 w-4" />
                        <span>
                          Published{' '}
                          {formatDistanceToNow(new Date(post.createdAt), {
                            addSuffix: true,
                          })}
                        </span>
                      </div>
                    </div>
                    <div className="ml-5 flex-shrink-0 flex space-x-2">
                      <button
                        type="button"
                        className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <Edit className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        <Trash className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
              {userPosts.length === 0 && (
                <li className="px-4 py-5 sm:px-6">
                  <p className="text-gray-500 text-center">
                    You haven't written any posts yet.{' '}
                    <Link to="/write" className="text-blue-600 hover:text-blue-500">
                      Write your first post
                    </Link>
                  </p>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}