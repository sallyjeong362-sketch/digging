import type { Lang } from '../types';

export function youtubeSearchUrl(query: string): string {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

export function wikipediaSearchUrl(query: string, lang: Lang): string {
  const host = lang === 'ko' ? 'ko.wikipedia.org' : 'en.wikipedia.org';
  return `https://${host}/w/index.php?search=${encodeURIComponent(query)}&title=Special:Search&fulltext=1`;
}
