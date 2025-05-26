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

export async function getBlogPost(slug) {
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: data.title || 'Blog Post' })
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

  let formattedDate = 'Invalid Date';
  try {
    const dateObject = new Date(data.date);
    if (!isNaN(dateObject)) {
      formattedDate = dateObject.toLocaleDateString();
    }
  } catch {}

  return {
    htmlContent,
    metadata: {
      title: data.title,
      author: data.author,
      description: data.description,
      formattedDate,
    },
  };
}
