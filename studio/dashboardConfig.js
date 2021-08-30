export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '612d2f2686eca72a6a008993',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bf9rh5mq',
                  apiId: '8bf26e35-5e3c-4156-82a2-7eda326639cd'
                },
                {
                  buildHookId: '612d2f264bf51c2d8ad86ffb',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9ahqny29',
                  apiId: '1a651ff1-775b-4e2b-a009-6021365d3347'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Andrew112/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9ahqny29.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
