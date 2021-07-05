import Vue from 'vue';

function ogData(type, content, path, lang) {
  var title = ''
  var category = ''
  var imageUrl = ''
  var description = ''
  // Set image url
  if (content.ogData && content.ogData.image) {
    imageUrl = process.env.baseUrl + content.ogData.image.url
  } else if (content.thumbnail) {
    imageUrl = process.env.baseUrl + content.thumbnail.url
  } else {
    imageUrl = ''
  }
  // Set title
  if (type == 'article') {
    title = content.title
  } else {
    title = content['title_' + lang]
  }
  // Set category
  if (type == 'career') {
    category = content.careerType['title_' + lang]
  } else if (content.category) {
    category = content.category['title_' + lang]
  } else {
    category = ''
  }
  // Set description
  if (content.excerpt) {
    description = content.excerpt
  } else if (content['tagline_' + lang]) {
    description = content['tagline_' + lang]
  } else if (content['metaDescription_' + lang]) {
    description = content['metaDescription_' + lang]
  } else if (content['excerpt_' + lang]) {
    description = content['excerpt_' + lang]
  } else {
    description = title
  }
  // Set data
  let data = {
    title: title,
    url: 'https://josa.ngo' + path,
    type: type,
    publishedTime: content.publishDate ? content.publishDate : content.created_at,
    modifiedTime: content.created_at,
    updatedTime: content.updated_at,
    category: category,
    image: imageUrl,
    description: description
  }
  return data
}


const ogTags = (type, content, path, lang) => {
  let data = ogData(type, content, path, lang);
  let tags = [
    // Facebook Open Graph
    {
      property: 'og:site_name',
      content: 'Jordan Open Source Association'
    },
    {
      property: 'og:title',
      content: data.title
    },
    {
      property: 'og:url',
      content: data.url
    },
    {
      property: 'og:type',
      content: data.type
    },
    {
      property: 'og:description',
      content: data.description
    },
    {
      property: 'og:updated_time',
      content: data.updatedTime
    },
    {
      property: 'article:published_time',
      content: data.publishedTime
    },
    {
      property: 'article:modified_time',
      content: data.modifiedTime
    },
    {
      property: 'article:section',
      content: data.category
    },
    {
      property: 'article:publisher',
      content: 'https://facebook.com/jordanopensource'
    },
    {
      property: 'og:image',
      content: data.image
    },
    // Twitter Cards
    {
      name: 'twitter:title',
      content: data.title
    },
    {
      name: 'twitter:url',
      content: data.url
    },
    {
      name: 'twitter:description',
      content: data.description
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:image',
      content: data.image
    }
  ]
  return tags
};

Vue.filter('ogTags', ogTags)