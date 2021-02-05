// my solution

const headingGenerator = (tag, content) => {
    console.log(`<h${tag}>${content}</h${tag}>`);
  }
  
  headingGenerator('1', 'This is the title')
  headingGenerator('2', 'This is the subtitle')
  headingGenerator('3', 'This is the paragraph')
  
  