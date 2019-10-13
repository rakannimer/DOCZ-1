
export function mapComponentClasses (styles, componentClasses) {
  return componentClasses.trim()
    .split(' ')
    .map(key => styles[key] || key)
    .filter(item => !!item)
    .join(' ')
}
