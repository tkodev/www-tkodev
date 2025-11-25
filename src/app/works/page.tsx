import { FC } from 'react'
import { Main } from '@/components/sections/main'
import { SectionContact } from '@/components/organisms/section-contact'
import { SectionProjects } from '@/components/organisms/section-projects'
import { PageProps } from '@/types/layout'

const Page: FC<PageProps> = async () => {
  return (
    <Main>
      <SectionProjects id="works" />
      <SectionContact id="contact" />
    </Main>
  )
}

export default Page
