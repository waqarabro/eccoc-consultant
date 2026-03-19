import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';
import { BLOG_POSTS } from '@/lib/blogData';
import { notFound } from 'next/navigation';

type Props = {
    params: Promise<{ slug: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = BLOG_POSTS.find(p => p.id === slug);

    if (!post) {
        return { title: 'Post Not Found' };
    }

    const baseUrl = 'https://eccoc.com.au';
    const postUrl = `${baseUrl}/insights/${slug}`;
    const imageUrl = post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`;

    return {
        title: `${post.title} | ecco Consultants`,
        description: post.excerpt,
        alternates: {
            canonical: postUrl,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: postUrl,
            images: [imageUrl],
            type: 'article',
            authors: [post.author],
            publishedTime: post.date,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [imageUrl],
        }
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = BLOG_POSTS.find(p => p.id === slug);

    if (!post) {
        notFound();
    }

    return <BlogPostClient post={post} />;
}
