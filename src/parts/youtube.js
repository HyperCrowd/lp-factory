const Part = require('./index')

const schema = {
  youtubeId: String,
  start: Number,
  title: String
}

module.exports = class Youtube extends Part {
  /**
   * Gets the schema of the part
   */
  getSchema () {
    return { ...schema }
  }

  /**
   *
   */
  getValues (audience) {
    return {
      youTubeId: audience.youTubeId,
      start: audience.start || 0,
      title: audience.title || ''
    }
  }

  /**
   * Renders the part to HTML
   */
  render () {
    const result = `<div class="content youtube" id="part-${this.id}">
      <h2 class="content-head is-center">Dolore magna aliqua. Uis aute irure.</h2>
      <div class="pure-g">
        <div id="yt-$${this.id}.youTubeId" class="is-center pure-u-1">
          <iframe
            width="720"
            height="405"
            src="https://www.youtube.com/embed/$${this.id}.youtubeId?controls=0&amp;start=$${this.youTubeId}.start"
            title="$${this.id}.title"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <script>
        window.addEventListener("resize", () => {
          const iframe = document.querySelector("#yt-$${this.youTubeId}.youTubeId iframe");
          const iframeContainer = document.getElementById("yt-$${this.id}.youTubeId");
          const containerWidth = iframeContainer.offsetWidth;
          let desiredWidth = containerWidth;
          let desiredHeight = (containerWidth / 16) * 9

          if (desiredWidth > 720) {
            desiredWidth = 720
          }

          if (desiredHeight > 405) {
            desiredHeight = 405
          }

          iframe.style.width = desiredWidth + 'px';
          iframe.style.height = desiredHeight + 'px';
          console.log({desiredHeight, desiredWidth})
        });
      </script>
    </div>`

    return super.render(result)
  }
}
