import { PageScaffold, Layout, AnimateOnScroll } from '@components'

const PrivacyPolicy = () => {
  return (
    <Layout>
      <PageScaffold title='Datenschutzerklärung' bgColor='bg-secondary pt-8'>
        <section className='text-textDark min-h-screen py-20 md:px-20'>
          <AnimateOnScroll>
            <p className='mb-4'>
              Icons made from{' '}
              <a
                href='https://www.onlinewebfonts.com/icon'
                target='_blank'
                rel='noreferrer noopener'
                className='underline'
                aria-label='SVG icons sind lizensiert von CC BY 4.0'
              >
                svg icons
              </a>{' '}
              is licensed by CC BY 4.0.
            </p>
          </AnimateOnScroll>
        </section>
      </PageScaffold>
    </Layout>
  )
}

export default PrivacyPolicy
