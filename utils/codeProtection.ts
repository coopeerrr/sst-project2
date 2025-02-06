export function disableRightClick(event: MouseEvent) {
  event.preventDefault()
}

export function disableF12AndCtrlShiftI(event: KeyboardEvent) {
  if (
    event.keyCode === 123 || // F12
    (event.ctrlKey && event.shiftKey && event.keyCode === 73) // Ctrl+Shift+I
  ) {
    event.preventDefault()
  }
}

export function disableViewSource() {
  // This won't stop determined users, but it can deter casual inspection
  document.addEventListener("keydown", disableF12AndCtrlShiftI)
  document.addEventListener("contextmenu", disableRightClick)
}

export function addCopyProtection() {
  const style = document.createElement("style")
  style.textContent = `
    body {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  `
  document.head.appendChild(style)
}

