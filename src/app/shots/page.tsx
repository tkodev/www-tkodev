import { FC } from 'react'
import { Main } from '@/components/sections/main'
import { SectionContact } from '@/components/organisms/section-contact'
import { SectionShots } from '@/components/organisms/section-shots'
import { PageProps } from '@/types/layout'

const Page: FC<PageProps> = async () => {
  return (
    <Main>
      <SectionShots id="shots" />
      <SectionContact id="contact" />
    </Main>
  )
}

export default Page
