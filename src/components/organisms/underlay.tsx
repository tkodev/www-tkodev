import { forwardRef, HTMLAttributes } from 'react'
import { Bg } from '@/components/atoms/bg'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('', {
    variants: {
      size: {
        sm: '',
        md: '',
        lg: '',
        xl: ''
      }
    },
    defaultVariants: {
      size: 'sm'
    }
  })
}

type UnderlayRef = HTMLDivElement
type UnderlayProps = HTMLAttributes<UnderlayRef> & VariantProps<typeof styles.root>

const Underlay = forwardRef<UnderlayRef, UnderlayProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Bg />
    </div>
  )
})
Underlay.displayName = 'Underlay'

export { Underlay }
export type { UnderlayProps, UnderlayRef }
