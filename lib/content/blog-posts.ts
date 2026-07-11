export type BlogPostSection = {
  heading: string
  content: string
}

export type BlogPost = {
  id: string
  slug: string
  title: string
  date: string // ISO date
  authorName: string
  authorBio?: string
  excerpt: string
  bodySections: BlogPostSection[]
}

export const BLOG_POSTS: BlogPost[] = [
  // Add blog posts here. Example:
  // {
  //   id: 'example-post-1',
  //   slug: 'example-post-1',
  //   title: 'Example Post',
  //   date: '2026-07-12',
  //   authorName: 'Author Name',
  //   authorBio: 'Short bio.',
  //   excerpt: 'Short summary for listing.',
  //   bodySections: [
  //     { heading: 'Introduction', content: '...' }
  //   ]
  // }
]

export const BLOG_POST_MAP = new Map(BLOG_POSTS.map((p) => [p.slug, p]))

export function getBlogPostBySlug(slug: string) {
  return BLOG_POST_MAP.get(slug)
}

export function allBlogPosts() {
  return BLOG_POSTS
}
