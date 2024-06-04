import {  isInput, isInputOrTextArea, isTextArea } from './utils'

interface getSelectionResult {
  start: number
  end: number
  direction: 'forward' | 'backward' | 'none'
  text: string
}

// const input = document.createElement('input')

export function getInputSelection(element: HTMLElement) {
  const el = element as HTMLInputElement
  const result = {
    start: el.selectionStart,
    end: el.selectionEnd,
    direction: el.selectionDirection,
    text: el.value.slice(el.selectionStart || 0, el.selectionEnd || 0),
  }
  return result as getSelectionResult
}
export function getTextAreaSelection(element: HTMLElement) {
  const el = element as HTMLTextAreaElement
  const result = {
    start: el.selectionStart,
    end: el.selectionEnd,
    direction: el.selectionDirection,
    text: el.value.slice(el.selectionStart, el.selectionEnd),
  }
  return result as getSelectionResult
}
// <div contenteditable="true"> Hello <b>World</b></div>
// Hello <b>World</b>
// start: 3
// end: 9
// text: llo <b>World</b>
// console.log(getContentEditableSelection(div))
export function getSelectionCharacterOffsetWithin(element: HTMLElement){
  let start = 0
  let end = 0
  const selection = window.getSelection()
  if(selection?.rangeCount){
    const range = selection.getRangeAt(0)
    const preCaretRange = range.cloneRange()
    preCaretRange.selectNodeContents(element)
    preCaretRange.setEnd(range.startContainer, range.startOffset)
    start = preCaretRange.toString().length
    preCaretRange.setEnd(range.endContainer, range.endOffset)
    end = preCaretRange.toString().length
  }
  return {start, end}
}
export function getDefaultSelection(){
  return {
    start: 0,
    end: 0,
    direction: 'none',
    text: ''
  }
}
export function getContentEditableSelection() {
  const selection = window.getSelection()
  if(!selection?.rangeCount) 
    return getDefaultSelection()

  const range = selection.getRangeAt(0)
  const { start, end } = getSelectionCharacterOffsetWithin(range?.commonAncestorContainer as HTMLElement)
  const cloneSelection = range!.cloneContents()// document fragemnt
  const tempDiv = document.createElement('div')
  tempDiv.appendChild(cloneSelection)

  return{
    text: tempDiv.innerHTML || range?.toString() || tempDiv.textContent || '',
    start,
    end,
    direction:'forward' as const
  }


  
}

export function getSelection(element: HTMLElement) {
  if (isInput(element))
    return getInputSelection(element)

  else if (isTextArea(element))
    return getTextAreaSelection(element)

  else (isInputOrTextArea(element))
  return getContentEditableSelection()
}
