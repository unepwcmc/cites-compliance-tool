import {Downloader} from '../helpers/downloader'

export default {
  data() {
    return {
      disableDownload: false
    }
  },

  methods: {
    onClickDownload(path) {
      if (this.disableDownload) {
        return
      }

      this.disableDownload = true

      Downloader(path).then(() => {
        this.disableDownload = false
      })
    }
  }
}