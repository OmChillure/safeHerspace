'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Reply {
  id: string
  author: string
  content: string
  createdAt: string
}

interface RepliesSectionProps {
  localityName: string
}

export default function RepliesSection({ localityName }: RepliesSectionProps) {
  const [replies, setReplies] = useState<Reply[]>([])
  const [newReply, setNewReply] = useState('')

  useEffect(() => {
    const fetchReplies = async () => {
      const response = await fetch(`/api/replies?locality=${encodeURIComponent(localityName)}`)
      const data = await response.json()
      setReplies(data)
    }

    fetchReplies()
  }, [localityName])

  const handleSubmitReply = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newReply.trim()) return

    // Replace this with your actual API call to submit a new reply
    const response = await fetch('/api/replies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ localityName, content: newReply }),
    })

    if (response.ok) {
      const createdReply = await response.json()
      setReplies([...replies, createdReply])
      setNewReply('')
    }
  }

  return (
    <div>
      <div className="space-y-4 mb-6">
        {replies.map((reply) => (
          <div key={reply.id} className="flex space-x-4">
            <Avatar>
              <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${reply.author}`} />
              <AvatarFallback>{reply.author.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{reply.author}</p>
              <p className="text-sm text-gray-500">{new Date(reply.createdAt).toLocaleString()}</p>
              <p className="mt-1">{reply.content}</p>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmitReply} className="space-y-4">
        <Textarea
          value={newReply}
          onChange={(e) => setNewReply(e.target.value)}
          placeholder="Write a reply..."
          className="w-full"
        />
        <Button type="submit">Post Reply</Button>
      </form>
    </div>
  )
}