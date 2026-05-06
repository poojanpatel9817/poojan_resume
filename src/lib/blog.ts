// Simple frontmatter parser for browser compatibility
function parseFrontmatter(text: string) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: text };

  const yamlBlock = match[1];
  const content = match[2];
  const data: any = {};

  yamlBlock.split('\n').forEach(line => {
    const [key, ...valueChunks] = line.split(':');
    if (key && valueChunks.length) {
      const value = valueChunks.join(':').trim();
      // Handle simple arrays like [tag1, tag2]
      if (value.startsWith('[') && value.endsWith(']')) {
        data[key.trim()] = value.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
      } else {
        data[key.trim()] = value.replace(/^["']|["']$/g, '');
      }
    }
  });

  return { data, content };
}

export async function getBlogPosts() {
  const posts = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default' });
  
  const postList = await Promise.all(
    Object.keys(posts).map(async (path) => {
      const content = (await posts[path]()) as string;
      const { data, content: body } = parseFrontmatter(content);
      const slug = path.split('/').pop()?.replace('.md', '') || '';
      
      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        summary: data.summary || '',
        tags: data.tags || [],
        content: body,
      };
    })
  );

  return postList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(slug: string) {
  const posts = await getBlogPosts();
  return posts.find((p) => p.slug === slug);
}
