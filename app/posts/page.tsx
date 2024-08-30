"use client"
import Image from 'next/image'
import React from 'react'
import Head from 'next/head'
import Breadcrumbs from '@/components/breadcrumbs';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter()
    const posts = [
        { id: 1, title: "bai viet 1", thumbnailUrl: "https://images.unsplash.com/photo-1722515177905-930b3e2bcea6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" },
        { id: 2, title: "bai viet 2", thumbnailUrl: "https://images.unsplash.com/photo-1700592581105-892b90bfac92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" },
        { id: 3, title: "bai viet 3", thumbnailUrl: "https://images.unsplash.com/photo-1723369124721-180613159c78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" },
        { id: 4, title: "bai viet 4", thumbnailUrl: "https://images.unsplash.com/photo-1722515177905-930b3e2bcea6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" },
        { id: 5, title: "bai viet 5", thumbnailUrl: "https://images.unsplash.com/photo-1700592581105-892b90bfac92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" },
        { id: 6, title: "bai viet 6", thumbnailUrl: "https://images.unsplash.com/photo-1723369124721-180613159c78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" }
    ]
    const postDetail = (id: any) => {
        console.log("post detail", id);
        router.push(`/posts/${id}`)
    }
    return (
        <div className="p-6">
            <Head>
                <title>Danh sách bài viết</title>
                <meta name="description" content="This is the list of articles page where you can find various posts on different topics." />
                <meta name="keywords" content="articles, posts, blog, danh sach bai viet" />
            </Head>
            <Breadcrumbs />
            <h1 className="text-center text-xl font-semibold mb-6">Danh sách bài viết</h1>
            <ul className="grid grid-cols-3 gap-4">
                {posts.map(post => (
                    <li onClick={()=> postDetail(post.id)} key={post.id} className="border p-4 rounded-lg flex flex-col items-center shadow-md">
                        <Image
                            src={post.thumbnailUrl}
                            width={150}
                            height={150}
                            alt={post.title}
                            className="mb-4"
                            loading="lazy"
                        />
                        <h2 className="text-center font-medium">{post.title}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
}
