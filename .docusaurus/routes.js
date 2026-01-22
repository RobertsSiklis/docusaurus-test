import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus-test/blog',
    component: ComponentCreator('/docusaurus-test/blog', '452'),
    exact: true
  },
  {
    path: '/docusaurus-test/blog/archive',
    component: ComponentCreator('/docusaurus-test/blog/archive', 'f1c'),
    exact: true
  },
  {
    path: '/docusaurus-test/blog/authors',
    component: ComponentCreator('/docusaurus-test/blog/authors', '22b'),
    exact: true
  },
  {
    path: '/docusaurus-test/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/docusaurus-test/blog/authors/all-sebastien-lorber-articles', '68c'),
    exact: true
  },
  {
    path: '/docusaurus-test/blog/authors/yangshun',
    component: ComponentCreator('/docusaurus-test/blog/authors/yangshun', 'b73'),
    exact: true
  },
  {
    path: '/docusaurus-test/blog/first-blog-post',
    component: ComponentCreator('/docusaurus-test/blog/first-blog-post', '97b'),
    exact: true
  },
  {
    path: '/docusaurus-test/blog/long-blog-post',
    component: ComponentCreator('/docusaurus-test/blog/long-blog-post', 'caa'),
    exact: true
  },
  {
    path: '/docusaurus-test/blog/mdx-blog-post',
    component: ComponentCreator('/docusaurus-test/blog/mdx-blog-post', '98b'),
    exact: true
  },
  {
    path: '/docusaurus-test/blog/tags',
    component: ComponentCreator('/docusaurus-test/blog/tags', '278'),
    exact: true
  },
  {
    path: '/docusaurus-test/blog/tags/docusaurus',
    component: ComponentCreator('/docusaurus-test/blog/tags/docusaurus', 'ad0'),
    exact: true
  },
  {
    path: '/docusaurus-test/blog/tags/facebook',
    component: ComponentCreator('/docusaurus-test/blog/tags/facebook', 'd47'),
    exact: true
  },
  {
    path: '/docusaurus-test/blog/tags/hello',
    component: ComponentCreator('/docusaurus-test/blog/tags/hello', '332'),
    exact: true
  },
  {
    path: '/docusaurus-test/blog/tags/hola',
    component: ComponentCreator('/docusaurus-test/blog/tags/hola', '7a6'),
    exact: true
  },
  {
    path: '/docusaurus-test/blog/welcome',
    component: ComponentCreator('/docusaurus-test/blog/welcome', '891'),
    exact: true
  },
  {
    path: '/docusaurus-test/markdown-page',
    component: ComponentCreator('/docusaurus-test/markdown-page', 'c8c'),
    exact: true
  },
  {
    path: '/docusaurus-test/docs',
    component: ComponentCreator('/docusaurus-test/docs', '270'),
    routes: [
      {
        path: '/docusaurus-test/docs',
        component: ComponentCreator('/docusaurus-test/docs', 'e9e'),
        routes: [
          {
            path: '/docusaurus-test/docs',
            component: ComponentCreator('/docusaurus-test/docs', '92c'),
            routes: [
              {
                path: '/docusaurus-test/docs/category/tutorial---basics',
                component: ComponentCreator('/docusaurus-test/docs/category/tutorial---basics', 'c9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-test/docs/category/tutorial---extras',
                component: ComponentCreator('/docusaurus-test/docs/category/tutorial---extras', '0d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-test/docs/intro',
                component: ComponentCreator('/docusaurus-test/docs/intro', '095'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-test/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docusaurus-test/docs/tutorial-basics/congratulations', '1ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-test/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docusaurus-test/docs/tutorial-basics/create-a-blog-post', '369'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-test/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docusaurus-test/docs/tutorial-basics/create-a-document', 'f2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-test/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docusaurus-test/docs/tutorial-basics/create-a-page', '147'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-test/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docusaurus-test/docs/tutorial-basics/deploy-your-site', '485'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-test/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docusaurus-test/docs/tutorial-basics/markdown-features', 'a7b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-test/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docusaurus-test/docs/tutorial-extras/manage-docs-versions', '4d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-test/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docusaurus-test/docs/tutorial-extras/translate-your-site', '66b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docusaurus-test/',
    component: ComponentCreator('/docusaurus-test/', '790'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
