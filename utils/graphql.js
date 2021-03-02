export const resolveEdgeImages = (data) => {
  let images = {};
  data.edges.map((image) => {
    if (image.node) {
      images[image.node.base] = image.node;
    }
    return true;
  });

  return images;
};
