export const batchYear = {
  name: 'batchYear',
  title: 'Batch Year',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. 2025-2026',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Mark true to make this the default/current batch',
      initialValue: false,
    },
  ],
};
