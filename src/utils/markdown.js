import { marked } from 'marked';

// 配置 marked
const configureMarked = () => {
  const renderer = new marked.Renderer();

  renderer.link = (token) => {
    const isExternal = /^(https?|ftp|ftps|file|mailto|tel):\/\//.test(
      token.href,
    );
    const target = isExternal
      ? ' target="_blank" rel="noopener noreferrer"'
      : '';
    const titleAttr = token.text ? ` name="${token.text}"` : '';

    // console.log(isExternal);
    // console.log(target);
    // console.log(titleAttr);
    return `<a href="${token.href}"${target}${titleAttr} class="link">${token.text}</a>`;
  };

  marked.setOptions({
    renderer,
    breaks: true,
    gfm: true,
  });
};

// 初始化配置
configureMarked();

// 導出解析函數
export const parseMarkdown = (content) => {
  return marked.parse(content || '');
};

// 或者直接導出 marked
export { marked };
