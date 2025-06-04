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
        src: '/logo-white.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/logo-white.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/logo-white.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
  }
}