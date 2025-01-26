import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { formatDistanceToNow } from 'date-fns';
import { Clock, Tag, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Post() {
  const { slug } = useParams<{ slug: string }>();
  const { currentPost: post, loading } = useSelector((state: RootState) => state.posts);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-600">Post not found</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - BlogPro</title>
        <meta name="description" content={post.summary} />
      </Helmet>

      <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {post.featuredImage && (
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
        )}
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {post.author.name}
            </div>
          </div>

          <div className="prose max-w-none">
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={tomorrow}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
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
        </div>
      </article>
    </>
  );
}