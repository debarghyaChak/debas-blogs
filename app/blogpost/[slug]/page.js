import { getBlogPost } from '@/lib/getBlogPost';

export default async function BlogPostPage({ params }) {
  const post = await getBlogPost(params.slug);

  if (post.notFound) {
    // Optional: show not found
    return <div className="text-center text-red-500">Post not found</div>;
  }

  const { htmlContent, metadata } = post;

  return (
    <div className="max-w-6xl mx-auto p-4 prose dark:prose-invert">
      <h1 className="text-4xl font-bold mb-4 dark:text-gray-400">{metadata.title}</h1>
      <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
        &quot;{metadata.description}&quot;
      </p>
      <div className="flex gap-2 items-center">
        <p className="text-sm text-gray-500 mb-4 italic dark:text-gray-400">
          By {metadata.author}
        </p>
        <p className="text-sm text-gray-500 mb-4">{`on ${metadata.formattedDate}`}</p>
      </div>
      <div
        className="mt-4 dark:text-gray-400"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
