export const extractFirstParagraph = (richTextJson: any) => {
  if (!richTextJson) return '';

  const document = richTextJson;
  let firstParagraphText = '';

  // Function to recursively extract text from a node
  const extractText = (node: any) => {
    if (!node) return '';

    switch (node.nodeType) {
      case 'text':
        return node.value;
      case 'paragraph':
        return node.content.map(extractText).join('');
      default:
        if (node.content) {
          return node.content.map(extractText).join('');
        }
        return '';
    }
  };

  // Find the first paragraph node
  const firstParagraphNode = document.content.find((node: any) => node.nodeType === 'paragraph');

  // Extract text from the first paragraph node
  if (firstParagraphNode) {
    firstParagraphText = extractText(firstParagraphNode);
  }

  return firstParagraphText;
};
