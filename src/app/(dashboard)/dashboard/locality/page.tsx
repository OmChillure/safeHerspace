"use client"
import React, { useEffect, useState } from 'react'
import { getFiles } from '@/actions'
import { Button } from '@/components/ui/button' 
import Image from 'next/image'
import Link from 'next/link'

interface FileData {
    name: string;
    descr: string;
    email: string;  
    url: string;
}

function FilesPage() {
    const [data, setData] = useState<FileData[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
      getFiles()
        .then((res) => {
        if (!res.success) {
          setError('Failed to fetch data')
        } else {
          setData(res.body)
        }
        setIsLoading(false)
      })
      .catch(() => {
        setError('An error occurred while fetching data')
        setIsLoading(false)
      })
    }, [])

  return (
    <div className="flex flex-col overflow-y-auto scrollbar-hide h-screen p-4 pt-6 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">User Files</h1>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center h-64">
          <p className="text-xl text-gray-500 dark:text-gray-400">Loading...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
          <p>{error}</p>
        </div>
      )}

      {!isLoading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {data.map((file, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col">
              <div className="relative h-40 md:h-48">
                <Image 
                  className="object-cover" 
                  layout="fill"
                  src={file.url} 
                  alt={file.name} 
                />
              </div>
              <div className="p-4 md:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-2 line-clamp-1">{file.name}</h2>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">{file.descr}</p>
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300">
                  <Link
                    href={`/dashboard/locality/${encodeURIComponent(file.name)}`}
                    target="_blank"
                    className="block w-full h-full"
                  >
                    View Locality
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FilesPage