export const metadata = {
  title: 'Blog - UniBand AI Lecture Recorder',
  description: 'Stay up to date on tips, strategies, and trends for smarter learning with UniBand.',
}

import PageShell from '../../components/PageShell'
import { blogPosts } from '../../data/constants'
import BlogFilter from '../../components/BlogFilter'

export default function BlogPage() {
  return (
    <PageShell
      title="The Blog"
      subtitle="Stay up to date on tips, strategies, and trends for smarter learning."
    >
      <BlogFilter blogPosts={blogPosts} />
    </PageShell>
  )
}
