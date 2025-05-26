import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import rehypePrettyCode from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers';

export async function generateStaticParams() {
  const dirPath = path.join(process.cwd(), 'content');
  const files = fs.readdirSync(dirPath);

  return files.map((file) => ({
    slug: file.replace(/\.md$/, ''),
  }));
}

export default async function BlogPostPage({ params }) {
  const filePath = path.join(process.cwd(), 'content', `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    // You can throw 404 error here if you want
    throw new Error('Post not found');
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: '👋🌍' })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypePrettyCode, {
      theme: 'github-dark',
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  let formattedDate = null;
  try {
    const dateObject = new Date(data.date);
    if (isNaN(dateObject)) {
      console.error(`Invalid date format in file: ${filePath}`);
      formattedDate = 'Invalid Date';
    } else {
      formattedDate = dateObject.toLocaleDateString();
    }
  } catch (dateError) {
    console.error(`Error parsing date in file ${filePath}:`, dateError);
    formattedDate = 'Error Parsing Date';
  }

  return (
    <div className="max-w-6xl mx-auto p-4 prose dark:prose-invert">
      <h1 className="text-4xl font-bold mb-4 dark:text-gray-400">{data.title}</h1>
      <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
        &quot;{data.description}&quot;
      </p>
      <div className="flex gap-2 items-center">
        <p className="text-sm text-gray-500 mb-4 italic dark:text-gray-400">By {data.author}</p>
        <p className="text-sm text-gray-500 mb-4">{`on ${formattedDate}`}</p>
      </div>
      <div
        className="mt-4 dark:text-gray-400"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
