"use client"
import React, { useState, useEffect } from 'react';
import { getFilesfromName } from '@/actions/index';
import { Skeleton } from "@/components/ui/skeleton"
import { AlertCircle, Mail, ExternalLink, MessageCircle } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface FileData {
  name: string;
  descr: string;
  email: string;
  url: string;
}

interface Reply {
  id: number;
  author: string;
  content: string;
  timestamp: string;
}

export default function FileDisplay({ params }: { params: { name: string } }) {
  const [file, setFile] = useState<FileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [newReply, setNewReply] = useState('');

  useEffect(() => {
    const fetchFile = async () => {
      try {
        setLoading(true);
        const result = await getFilesfromName(params.name);
        if (result.success && result.body.length > 0) {
          setFile(result.body[0]);
          setReplies([
            { id: 1, author: 'John Doe', content: 'Great file! Thanks for sharing.', timestamp: '2 hours ago' },
            { id: 2, author: 'Jane Smith', content: 'This is exactly what I was looking for.', timestamp: '1 day ago' },
          ]);
        } else {
          throw new Error('File not found');
        }
      } catch (error) {
        console.error('Error fetching file:', error);
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchFile();
  }, [params.name]);

  const handleReplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReply.trim()) {
      const reply: Reply = {
        id: replies.length + 1,
        author: 'Current User',
        content: newReply.trim(),
        timestamp: 'Just now'
      };
      setReplies([reply, ...replies]);
      setNewReply('');
    }
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6 space-y-4">
        <div className="flex space-x-6">
          <Skeleton className="h-96 w-96" />
          <div className="flex-1 space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
        <Skeleton className="h-40 w-full" />
      </div>
    );
  }

  if (error || !file) {
    return (
      <div className="text-red-600 flex items-center justify-center h-screen">
        <AlertCircle className="mr-2 h-5 w-5" />
        <span>Error: {error || 'File not found'}</span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex mb-12 space-x-8 gap-20">
        <div className="w-96 h-80 flex-shrink-0">
          <img 
            src={file.url}
            alt={file.name} 
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{file.name}</h1>
            <p className="text-gray-600 mb-4">{file.descr}</p>
          </div>
          <a
            href="https://www.360cities.net/image/bugando-hospital-laboratory-tanzania-2/vr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition self-start"
          >
            View VR mode
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Replies</h2>
        <form onSubmit={handleReplySubmit} className="mb-6">
          <Textarea
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
            placeholder="Add a reply..."
            className="mb-2"
          />
          <Button type="submit">Post Reply</Button>
        </form>
        <div className="space-y-4">
          {replies.map((reply) => (
            <div key={reply.id} className="flex space-x-4">
              <Avatar>
                <AvatarFallback>{reply.author[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold">{reply.author}</h3>
                  <span className="text-sm text-gray-500">{reply.timestamp}</span>
                </div>
                <p className="text-gray-700">{reply.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}