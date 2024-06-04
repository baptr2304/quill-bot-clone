import { isInput, isInputOrTextArea, isTextArea } from './utils'
import { getSelectionCharacterOffsetWithin } from './get'

interface setSelectionOptions {
  start: number
  end: number
  direction?: 'forward' | 'backward' | 'none'

}
// const input = document.createElement('input')
// input.selection
export function setInputSelection(element: HTMLElement, options: setSelectionOptions) {
  const el = element as HTMLInputElement
  el.setSelectionRange(options.start, options.end, options.direction || 'forward')
}

export function setTextAreaSelection(element: HTMLElement, options: setSelectionOptions) {
  const el = element as HTMLTextAreaElement
  el.setSelectionRange(options.start, options.end, options.direction || 'forward')
}

function getTextNodesUnder(node: Node): Node[] {
  const textNodes: Node[] = []

  function getTextNodes(node: Node) {
    if (node.nodeType === Node.TEXT_NODE)
      textNodes.push(node)
    else
      node.childNodes.forEach(getTextNodes)
  }

  getTextNodes(node)
  return textNodes
}

export function setContentEditableSelection(element: HTMLElement) {
  const { start, end } = getSelectionCharacterOffsetWithin(element);
  const textNodes = getTextNodesUnder(element)

  let currentPos = 0
  let startNode: Node | null = null
  let startOffset = 0
  let endNode: Node | null = null
  let endOffset = 0

  for (const node of textNodes) {
    const nodeLength = node.textContent?.length || 0

    if (startNode === null && currentPos < start && start <= currentPos + nodeLength ) {
      startNode = node
      startOffset = start - currentPos
      // console.log('start',start)
    }

    if (endNode === null && end > currentPos && end <= currentPos + nodeLength) {
      endNode = node
      endOffset = end - currentPos
      // console.log('end',end)
      break
    }

    currentPos += nodeLength
  }


  return { startNode, startOffset, endNode, endOffset }
}

// có vấn đề thì dùng hàm này
export function setNativeSelection() {

}
export function setSelection(element: HTMLElement, options: setSelectionOptions) {
  if (isInput(element))
    return setInputSelection(element, options)

  else if (isTextArea(element))
    return setTextAreaSelection(element, options)

  else (isInputOrTextArea(element))
  return setContentEditableSelection(element )
}

export function test(element: HTMLElement, options: setSelectionOptions) {
  const { start, end } = options
  const textNodes = getTextNodesUnder(element)

  let currentPos = 0
  let startNode: Node | null = null// Đây là text node chứa vị trí bắt đầu của lựa chọn văn bản

  let startOffset = 0// hiện vị trị bắt đầu của range bên trong startContainer(node đầu tiên của range)

  let endNode: Node | null = null// Đây là text node chứa vị trí kết thúc của lựa chọn văn bản.

  let endOffset = 0 // thể hiện vị trí kết thúc của range bên trong endContainer(node cuối cùng của range)

  for (const node of textNodes) { // Tính độ dài của mỗi text node:
    const nodeLength = node.textContent?.length || 0
    // Độ dài của text node hiện tại
    // textContent: Trả về 1 chuỗi ký tự chứa nội dung của tất cả nút văn bản bên trong phần tử hiện tại.

    if (startNode === null && currentPos + nodeLength >= start) { // startNode === null: Điều kiện này đảm bảo rằng chúng ta chỉ xác định startNode một lần duy nhất. Nếu startNode đã được xác định, chúng ta sẽ không thực hiện lại đoạn mã này.
      // currentPos + nodeLength >= start: Điều kiện này kiểm tra xem tổng số ký tự đã duyệt qua (currentPos) cộng với độ dài của text node hiện tại (nodeLength) có lớn hơn hoặc bằng vị trí bắt đầu (start) hay không.
      // Ví dụ: Giả sử start là 2 và currentPos là 0, nếu nodeLength là 5 (tương ứng với text node "Hello"), thì currentPos + nodeLength là 5, lớn hơn 2. Điều này có nghĩa là vị trí bắt đầu nằm trong text node này.
      startNode = node
      startOffset = start - currentPos
    }

    if (endNode === null && currentPos + nodeLength >= end) { // endNode === null: Điều kiện này đảm bảo rằng chúng ta chỉ xác định endNode một lần duy nhất. Nếu endNode đã được xác định, chúng ta sẽ không thực hiện lại đoạn mã này.
      //       Khi điều kiện endNode === null && currentPos + nodeLength >= end thỏa mãn, chúng ta đã tìm thấy text node chứa vị trí kết thúc.
      // Gán node (text node hiện tại) cho endNode.
      // Tính toán endOffset bằng cách lấy vị trí kết thúc (end) trừ đi số ký tự đã duyệt qua (currentPos).
      endNode = node
      endOffset = end - currentPos
      break
    }

    currentPos += nodeLength
  }
  return { startNode, startOffset, endNode, endOffset }
}
