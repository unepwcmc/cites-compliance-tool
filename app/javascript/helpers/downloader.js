import axios from 'axios'

const Downloader = (path) => {
  return new Promise((resolve, reject) => {
    if (!path) {
      return reject('Download path is missing')
    }

    axios.get(path).then((res) => {
      const disposition = res.headers['content-disposition']
      const matches = /"([^"]*)"/.exec(disposition)
      const filename = (matches && matches[1] ? matches[1] : 'cites-download.csv')

      const blob = new Blob([res.data], {
        type: 'text/csv'
      })

      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = filename

      document.body.appendChild(link)

      link.click()

      document.body.removeChild(link)

      resolve()
    }).catch(reject)
  })
}

export {Downloader}