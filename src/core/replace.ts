import {  setContentEditableSelection } from './set'
import { isInput, isTextArea } from './utils'

interface ReplaceOptions {
  start: number
  end: number
  text: string
}

export function replaceInputSelection(element: HTMLElement, options: ReplaceOptions) {
  const el = element as HTMLInputElement
  const value = el.value
  const { start, end, text } = options
  el.value = value.slice(0, start) + text + value.slice(end)
}
export function replaceTextAreaSelection(element: HTMLElement, options: ReplaceOptions) {
  const el = element as HTMLTextAreaElement
  const value = el.value
  const { start, end, text } = options
  el.value = value.slice(0, start) + text + value.slice(end)
}
export function replaceContentEditableSelection(element: HTMLElement, options: ReplaceOptions) {
  setContentEditableSelection(element)
  const selection = window.getSelection()
  const range = selection?.getRangeAt(0)
  range?.deleteContents()
  range?.insertNode(document.createTextNode(options.text))
}

export function replaceSelection(element: HTMLElement, options: ReplaceOptions) {
  if (isInput(element))
    return replaceInputSelection(element, options)
  else if (isTextArea(element))
    return replaceTextAreaSelection(element, options)
  else
    return replaceContentEditableSelection(element, options)
}
