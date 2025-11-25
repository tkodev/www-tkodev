import { FC } from 'react'
import { Main } from '@/components/sections/main'
import { SectionArchive } from '@/components/organisms/section-archive'
import { SectionContact } from '@/components/organisms/section-contact'
import { PageProps } from '@/types/layout'

const Page: FC<PageProps> = async () => {
  return (
    <Main>
      <SectionArchive id="archive" />
      <SectionContact id="contact" />
    </Main>
  )
}

export default Page
