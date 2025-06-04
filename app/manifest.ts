import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'XMA Agency Client Survey',
    short_name: 'XMA Survey',
    description: 'Complete our client survey and receive a FREE marketing audit worth $500',
    start_url: '/',
    display: 'standalone',
    background_color: '#111827',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}