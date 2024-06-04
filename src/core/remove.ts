import { setContentEditableSelection } from './set'
import { isInput, isTextArea } from './utils'

interface RemoveOptions {
  start: number
  end: number
}

export function removeInputSelection(element: HTMLElement, options: RemoveOptions) {
  const el = element as HTMLInputElement
  const value = el.value
  const { start, end } = options
  el.value = value.slice(0, start) + value.slice(end)
}
export function removeTextAreaSelection(element: HTMLElement, options: RemoveOptions) {
  const el = element as HTMLTextAreaElement
  const value = el.value
  const { start, end } = options
  el.value = value.slice(0, start) + value.slice(end)
}
export function removeContentEditableSelection(element: HTMLElement) {
  setContentEditableSelection(
    element
  )
  const selection = window.getSelection()
  const range = selection?.getRangeAt(0)
  range?.deleteContents()
}
export function removeSelection(element: HTMLElement, options: RemoveOptions){
    if (isInput(element))
      return removeInputSelection(element, options)
    else if (isTextArea(element))
      return removeTextAreaSelection(element, options)
    else
      return removeContentEditableSelection(element)
}
