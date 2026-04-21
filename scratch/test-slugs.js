const titles = [
  "International Business Management",
  "Human Resource Management (HR)"
];

titles.forEach(t => {
  const slug = t.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  console.log(`Title: "${t}" -> Slug: "${slug}"`);
});
