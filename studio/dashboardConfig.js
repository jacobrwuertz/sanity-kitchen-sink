export default {
  widgets: [
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
                  buildHookId: '609e941cc4b4a8fabc6b518d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hmd6ufxy',
                  apiId: 'eda78199-c05a-476b-84b6-bf0b00ad9c3f'
                },
                {
                  buildHookId: '609e941c9dcd83085a11d830',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-nzgktdtd',
                  apiId: '672aa862-94b7-4204-87b0-1531a01067d5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jacobrwuertz/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-nzgktdtd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
