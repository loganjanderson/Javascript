const blog = {
  title: 'My great post',
  summary: 'Summary of post'
}

const openGraphMetadata = ({ title, summary = 'A daily Smarty Post'}) => {
  console.log(`
  og-title=${title}
  of-description=${summary}
  `);
}

openGraphMetadata(blog);