import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  // Fix workspace root detection when there are multiple lockfiles on the system
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      {
        source: '/cases/gym-n8n',
        destination: '/cases/n8n-gym-dashboard',
        permanent: true, // 301 redirect
      },
    ]
  },
}

export default nextConfig
