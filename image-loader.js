export default function imageLoader({ src }) {
  const basePath = process.env.NODE_ENV === 'production' ? '/green_info' : ''
  return `${basePath}${src}`
} 