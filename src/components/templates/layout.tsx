import { forwardRef, HTMLAttributes } from 'react'
import { Footer } from '@/components/organisms/footer'
import { Header } from '@/components/organisms/header'
import { Overlay } from '@/components/organisms/overlay'
import { Underlay } from '@/components/organisms/underlay'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('relative h-full w-full')
}

type LayoutRef = HTMLDivElement
type LayoutProps = HTMLAttributes<LayoutRef> & VariantProps<typeof styles.root>

const Layout = forwardRef<LayoutRef, LayoutProps>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Underlay />
      <Header />
      {children}
      <Footer />
      <Overlay />
    </div>
  )
})
Layout.displayName = 'Layout'

export { Layout }
