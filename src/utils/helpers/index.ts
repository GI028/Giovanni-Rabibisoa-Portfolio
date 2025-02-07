type Cn = string | boolean | null | undefined

function concatClassNames(...args: Cn[]): string {
  return args.filter((item) => !!item).join(" ")
}

export { concatClassNames as cn}