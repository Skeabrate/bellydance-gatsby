exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query AllBlogPostsQuery {
      allContentfulBlog {
        edges {
          node {
            link
          }
        }
      }
    }
  `);

  data.allContentfulBlog.edges.forEach((edge) => {
    const link = edge.node.link;
    actions.createPage({
      path: `/blog/${link}`,
      component: require.resolve(`./src/templates/blog-post.jsx`),
      context: { link: link },
    });
  });
};
