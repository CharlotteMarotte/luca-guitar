import { PageScaffold, Layout, AnimateOnScroll } from '@components'

const LegalDisclosure = () => {
  return (
    <Layout>
      <PageScaffold title='Impressum' bgColor='bg-secondary pt-8'>
        <section className='min-h-screen py-20 md:px-20' aria-labelledby='legal-disclosure-title'>
          <AnimateOnScroll>
            <div className='max-w-4xl mx-auto p-12 bg-secondaryLight rounded-3xl text-textDark'>
              <h1 id='legal-disclosure-title' className='text-3xl font-bold mb-8'>
                Impressum
              </h1>

              <p className='mb-4'>Angaben gemäß § 5 TMG (Telemediengesetz):</p>

              <address className='mb-6'>
                <p>Luca de Michieli</p>
                <p>Lepsiusstr. 6</p>
                <p>12163 Berlin</p>
              </address>

              <div className='my-4'>
                <span className='font-bold'>Vertreten durch:</span>
                <p>Luca De Michieli</p>
              </div>

              <div className='mb-4'>
                <span className='font-bold'>Kontakt:</span>
                <p>
                  Telefon:{' '}
                  <a href='tel:+49 157 53366391' className='hover:underline'>
                    +49 157 53366391
                  </a>
                </p>
              </div>

              <div>
                <span className='font-bold'>E-Mail: </span>
                <a href='mailto:lucademichieli@posteo.net' className='hover:underline'>
                  lucademichieli@posteo.net
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </section>
      </PageScaffold>
    </Layout>
  )
}

export default LegalDisclosure
