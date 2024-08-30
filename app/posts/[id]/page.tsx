"use client"
import React from 'react';
import Breadcrumbs from '@/components/breadcrumbs';
import Image from 'next/image';


export default function PostDetailPage(id: any) {
    const { params } = id;
    console.log(params.id);


    const posts = [
        { id: 1, title: "bai viet 1", thumbnailUrl: "https://images.unsplash.com/photo-1722515177905-930b3e2bcea6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" },
        { id: 2, title: "bai viet 2", thumbnailUrl: "https://images.unsplash.com/photo-1700592581105-892b90bfac92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" },
        { id: 3, title: "bai viet 3", thumbnailUrl: "https://images.unsplash.com/photo-1723369124721-180613159c78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" },
        { id: 4, title: "bai viet 4", thumbnailUrl: "https://images.unsplash.com/photo-1722515177905-930b3e2bcea6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" },
        { id: 5, title: "bai viet 5", thumbnailUrl: "https://images.unsplash.com/photo-1700592581105-892b90bfac92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" },
        { id: 6, title: "bai viet 6", thumbnailUrl: "https://images.unsplash.com/photo-1723369124721-180613159c78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" }
    ]
    return (
        <>
            <Breadcrumbs />
            <h1>Bai viet chi tiet id: {params.id}</h1>

            {
                posts.filter(post => post.id === params.id).map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <Image
                            src={post.thumbnailUrl}
                            width={150}
                            height={150}
                            alt={post.title}
                        />
                    </div>
                ))
            }
            </>
    )
};


