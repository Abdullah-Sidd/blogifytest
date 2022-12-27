export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 90,
        }
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
        options: {
          dateFormat: 'YYYY-MM-DD',
          timeFormat: 'HH:mm',
        }
      },
      { 
        name: 'description',
        title: 'Deescription',
        type: 'string',
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'Heading 2', value: 'h2' },
                { title: 'Quote', value: 'blockquote' },
                { title: 'Hidden', value: 'blockComment' }
              ],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                  {title: 'Code', value: 'code'}
                ]
            },
          },
          {
            type: 'image'
          },
          
          {
            type: 'code'
          },
        ],
        
      },
      {
        name: 'authorimage',
        title: 'AuthorImage',
        type: 'image',
        options: {
          hotspot: true,
        }
      },
      {
        name: 'authorname',
        title: 'AuthorName',
        type: 'string',
      },
      {
        name: 'authordescription',
        title: 'AuthorDescription',
        type: 'string',
      }
    ]
  }