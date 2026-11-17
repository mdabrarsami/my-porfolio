// The hero file list behaves the way the app's details view does: click to
// select, Ctrl+click to add, arrow keys to move, and a status bar that counts
// what you picked. It is the shortest honest demo of what the app is.

const list = document.querySelector('[data-filelist]')
if (list) {
  const rows = [...list.querySelectorAll('[role="option"]')]
  const count = document.querySelector('[data-count]')
  const size = document.querySelector('[data-size]')

  const formatSize = (bytes) => {
    if (bytes === 0) return '0 bytes'
    const units = ['bytes', 'KB', 'MB', 'GB']
    const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), 3)
    const value = bytes / 1024 ** index
    return `${value >= 10 || index === 0 ? Math.round(value) : value.toFixed(1)} ${units[index]}`
  }

  const report = () => {
    const picked = rows.filter((row) => row.getAttribute('aria-selected') === 'true')
    if (picked.length === 0) {
      count.textContent = `${rows.length} items`
      size.textContent = 'Nothing selected'
      return
    }
    const bytes = picked.reduce((total, row) => total + Number(row.dataset.bytes || 0), 0)
    count.textContent = `${rows.length} items, ${picked.length} selected`
    size.textContent = formatSize(bytes)
  }

  const select = (row, additive) => {
    if (!additive) {
      rows.forEach((other) => other.setAttribute('aria-selected', 'false'))
    }
    row.setAttribute('aria-selected', additive && row.getAttribute('aria-selected') === 'true' ? 'false' : 'true')
    report()
  }

  rows.forEach((row, index) => {
    row.addEventListener('click', (event) => select(row, event.ctrlKey || event.metaKey))
    row.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault()
        const next = rows[index + (event.key === 'ArrowDown' ? 1 : -1)]
        if (next) {
          next.focus()
          select(next, false)
        }
      }
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault()
        select(row, event.ctrlKey || event.metaKey)
      }
    })
  })

  report()
}
