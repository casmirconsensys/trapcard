export default function siteUrl(path: string) {
  if (typeof window === 'undefined') {
    return new URL(path, process.env.NEXT_PUBLIC_SITE_URL).toString();
  } else {
    return new URL(path, window.location.origin).toString();
  }
}
