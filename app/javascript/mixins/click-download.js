import {Downloader} from '../helpers/downloader'

export default {
  data() {
    return {
      loadingDownload: false
    }
  },

  methods: {
    onClickDownload(path) {
      if (this.loadingDownload) {
        return
      }

      this.loadingDownload = true

      Downloader(path).then(() => {
        this.loadingDownload = false
      }).catch((err) => {
        this.loadingDownload = false
        console.error(err)
      })
    }
  }
}