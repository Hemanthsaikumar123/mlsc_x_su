export const domain = {
  name: 'domain',
  title: 'Domain',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. Web Development',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'batchYear',
      title: 'Batch Year',
      type: 'reference',
      to: [{ type: 'batchYear' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of the domain (optional)',
    },
  ],
};
