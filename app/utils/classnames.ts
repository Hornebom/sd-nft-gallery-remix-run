export function cx(props: (string | undefined | false)[]) {
  return props.filter(Boolean).join(' ')
}
