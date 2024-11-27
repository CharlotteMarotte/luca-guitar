import { createBrowserRouter } from 'react-router-dom'
import { LegalDisclosure, PrivacyPolicy } from '@pages'
import { Layout } from '@components'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />
  },
  {
    path: '/impressum',
    element: <LegalDisclosure />
  },
  {
    path: '/privacy',
    element: <PrivacyPolicy />
  }
])

export default router
