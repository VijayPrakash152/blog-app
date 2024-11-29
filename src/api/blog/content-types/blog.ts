import { slugify } from 'transliteration'; // Optional package for slug generation

export default {
  lifecycles: {
    async beforeCreate(event) {
      const { data } = event.params;
      console.log("Generating Slug");
      // Generate slug from the title if not manually provided
      if (data.title && !data.slug) {
        data.slug = slugify(data.title, { lowercase: true });
      }
    },
    async beforeUpdate(event) {
      const { data } = event.params;

      // Update slug if the title changes
      if (data.title && !data.slug) {
        data.slug = slugify(data.title, { lowercase: true });
      }
    },
  },
};
