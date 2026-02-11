'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export default function StudioPage() {
  console.log("DEBUG: Studio Page is rendering with config:", config.projectId);
  
  return (
    <div className="min-h-screen">
      <NextStudio config={config} />
    </div>
  )
}

