import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@/payload.config'
import type { Post } from '@/payload-types'
import './blog-post.css'

export async function generateStaticParams() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const posts = await payload.find({
    collection: 'posts',
    where: {
      status: {
        equals: 'published',
      },
    },
    limit: 100,
  })

  return posts.docs.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await params in Next.js 15+
  const { slug } = await params
  
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const posts = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  if (posts.docs.length === 0) {
    notFound()
  }

  const post = posts.docs[0] as Post

  // Format date
  const publishedDate = post.publishedDate
    ? new Date(post.publishedDate).toLocaleDateString('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''

  // Get author name
  const authorName =
    typeof post.author === 'object' && post.author
      ? (post.author as any).email?.split('@')[0] || 'نویسنده'
      : 'نویسنده'

  // Render rich text content
  const renderContent = (content: any) => {
    if (!content || !content.root) return null

    return content.root.children.map((node: any, index: number) => {
      if (node.type === 'paragraph') {
        return (
          <p key={index} className="blog-paragraph">
            {node.children.map((child: any, childIndex: number) => {
              if (child.type === 'text') {
                let element = <span key={childIndex}>{child.text}</span>
                if (child.bold) element = <strong key={childIndex}>{child.text}</strong>
                if (child.italic) element = <em key={childIndex}>{child.text}</em>
                return element
              }
              return null
            })}
          </p>
        )
      }
      if (node.type === 'heading') {
        const Tag = `h${node.tag}` as any
        return (
          <Tag key={index} className={`blog-heading-${node.tag}`}>
            {node.children.map((child: any) => child.text).join('')}
          </Tag>
        )
      }
      return null
    })
  }

  return (
    <div className="blog-post-page">
        <div className="blog-post-container">
          <Link href="/" className="blog-post-back">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              style={{ width: '20px', height: '20px' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            بازگشت به صفحه اصلی
          </Link>

          <article className="blog-post-card">
            <header className="blog-post-header">
              <div className="blog-post-category">بلاگ نسی‌لند</div>
              <h1 className="blog-post-title">{post.title}</h1>
              <div className="blog-post-meta">
                <div className="blog-post-meta-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  <span>{publishedDate}</span>
                </div>
                <div className="blog-post-meta-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  <span>{authorName}</span>
                </div>
              </div>
            </header>

            <div className="blog-post-content">{renderContent(post.content)}</div>

            <footer className="blog-post-footer">
              <div className="blog-post-share">
                اگر این مطلب برایتان مفید بود، آن را با دوستان خود به اشتراک بگذارید
              </div>
              <div className="blog-post-tags">
                <span className="blog-post-tag">#نسی‌لند</span>
                <span className="blog-post-tag">#خرید_اعتباری</span>
                <span className="blog-post-tag">#فینتک</span>
              </div>
            </footer>
          </article>
        </div>
      </div>
  )
}

