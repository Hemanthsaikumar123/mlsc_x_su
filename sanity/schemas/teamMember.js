export const teamMember = {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Chair', value: 'Chair' },
          { title: 'Vice Chair', value: 'Vice Chair' },
          { title: 'Lead', value: 'Lead' },
          { title: 'Co-Lead', value: 'Co-Lead' },
        ],
      },
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
      name: 'domain',
      title: 'Domain',
      type: 'reference',
      to: [{ type: 'domain' }],
      description: 'Leave empty for Chairs and Vice Chairs',
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Optional personal description (overrides domain description in tooltip)',
    },
    {
      name: 'imagePosition',
      title: 'Image Position',
      type: 'string',
      description: 'CSS object-position override (e.g. "object-top", "object-bottom"). Leave blank for default center.',
    },
  ],
};
