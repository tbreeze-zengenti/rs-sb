export type MetaProps = {
  author?: string;
  authorTwitterHandle?: string;
  description?: string;
  firstName?: string;
  lastName?: string;
  locale?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAltText?: string;
  ogType?: 'article' | 'profile' | 'website' | 'video';
  pageTitle: string;
  publishedDateTime?: string;
  rssFeedPath?: string;
  schema?: string;
  twitterCardType?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterHandle?: string;
  insytful?: boolean;
};
