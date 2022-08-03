<template>
  <div
    class="gallery"
    :class="{ 'gallery-display': show }"
    @mouseleave="hideGallery"
  >
    <div>
      <div v-for="(imageRow, i) in imageRows" :key="i" class="gallery__row">
        <div
          v-for="(image, j) in imageRow"
          :key="j"
          class="gallery__row__image"
          :style="{ width: `${100 / columns}%` }"
        >
          <div
            :class="[
              'postcard',
              { 'postcard-transition': activeImage === image }
            ]"
            :style="getPostcardStyle(i, j, image)"
            @click="e => selectImage(i, j, image)"
            :ref="`pc_${i}${j}`"
          >
            <div class="postcard-back" :style="backStyle">
              <div class="back">
                <el-image
                  :src="postCards[i * 3 + j]"
                  fit="cover"
                  @mouseenter="showGallery"
                />
              </div>
            </div>
            <div class="postcard-front" :style="frontStyle">
              <div class="front">
                <el-image :src="image" fit="cover" @mouseenter="showGallery" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay" v-show="activeImage" @click="activeImage = null"></div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default() {
        return [
          "https://s1.ax1x.com/2022/08/03/vVq8PJ.jpg",
          "https://s1.ax1x.com/2022/08/03/vVqJ2R.jpg",
          "https://s1.ax1x.com/2022/08/03/vVqUr6.jpg",
          "https://s1.ax1x.com/2022/08/03/vVqlaF.jpg",
          "https://s1.ax1x.com/2022/08/03/vVqaqK.jpg",
          "https://s1.ax1x.com/2022/08/03/vVqrPH.jpg"
        ];
      }
    },
    columns: {
      type: Number,
      default: 3
    },
    height: {
      type: Number,
      default: 300
    },
    width: {
      type: Number,
      default: 200
    }
  },
  data() {
    return {
      loaded: false,
      activeImage: null,
      show: false,
      rotations: {},
      transition: null,
      postCards: [
        "https://s1.ax1x.com/2022/08/04/vZzTI0.png", // 1
        "https://s1.ax1x.com/2022/08/04/vZzzZR.png", // 2
        "https://s1.ax1x.com/2022/08/04/vZzvL9.png", // 3
        "https://s1.ax1x.com/2022/08/04/vZzXM4.png", // 4 我喜欢你，恰似草木对光阴的钟情
        "https://s1.ax1x.com/2022/08/04/veSpIx.png", // 5
        "https://s1.ax1x.com/2022/08/04/veSiRO.png" // 6
      ],

      frontStyle: {},
      backStyle: {}
    };
  },
  computed: {
    imageRows() {
      return Array(Math.ceil(this.images.length / this.columns))
        .fill()
        .map((_, i) =>
          this.images.slice(i * this.columns, i * this.columns + this.columns)
        );
    }
  },
  created() {
    this.setRotations();
  },
  methods: {
    loadedAll() {
      this.loaded = true;
    },
    showGallery() {
      if (!this.show) {
        this.show = true;
      }
    },
    hideGallery() {
      if (this.show && !this.activeImage) {
        this.setRotations();
        this.show = false;
      }
    },
    selectImage(row, col, image) {
      const pc = this.$refs[`pc_${row}${col}`][0];
      const startHandler = e => {
        this.transition = image;
      };
      const endHandler = e => {
        if (!this.activeImage) {
          this.transition = null;
          pc.removeEventListener("transitionstart", startHandler);
          e.target.removeEventListener("transitionend", endHandler);
          console.log("transition ended");
        }
      };
      pc.addEventListener("transitionstart", startHandler);
      pc.addEventListener("transitionend", endHandler);
      this.activeImage = image;
    },
    getCenter(row, col) {
      const rowOffset = this.imageRows.length / 2 - row;
      let translateY = rowOffset * (this.height + 60) + rowOffset * 50;
      if (!(this.imageRows.length % 2)) {
        if (!translateY) {
          translateY -= 155;
        } else {
          translateY /= 2;
        }
      }

      const colOffset = Math.floor(this.columns / 2 - col);
      let translateX =
        colOffset * (this.width + 40) +
        (colOffset * (1200 - (this.width + 40) * this.columns)) / this.columns;
      return {
        translateY,
        translateX
      };
    },
    setRotations() {
      const shuffleArray = arr =>
        arr
          .map(a => [Math.random(), a])
          .sort((a, b) => a[0] - b[0])
          .map(a => a[1]);

      let indices = shuffleArray(Array.from(Array(this.images.length).keys()));
      console.log(indices);
      this.imageRows.forEach((row, i) =>
        row.forEach((col, j) => {
          const getRandom = (min, max) =>
            Math.floor(Math.random() * (max - min + 1) + min);

          const centre = this.getCenter(i, j);
          let translateY = centre.translateY;
          const translateYTolerance = (this.height + 60) * 0.5;
          translateY += getRandom(-translateYTolerance, translateYTolerance);

          let translateX = centre.translateX;
          const translateXTolerance = (this.width + 40) * 0.5;
          translateX += getRandom(-translateXTolerance, translateXTolerance);

          this.rotations[`${i},${j}`] = {
            row: translateY,
            col: translateX,
            rot: getRandom(-60, 60),
            zIndex: indices.splice(0, 1)
          };
        })
      );
    },
    getPostcardStyle(row, col, image) {
      const centre = this.getCenter(row, col);

      if (this.activeImage === image) {
        return {
          width: `${this.width + 40}px`,
          height: `${this.height + 60}px`,
          transition: "all 3s",
          transform: `translateX(${centre.translateX}px) translateY(${centre.translateY}px) translateZ(500px) rotateZ(90deg) !important`
        };
      }
      // this.frontStyle = {
      //   animation: "move01 2s linear forwards"
      // };
      // this.backStyle = {
      //   animation: "move02 1.5s 0.5s linear forwards"
      // };
      return {
        width: `${this.width + 40}px`,
        height: `${this.height + 60}px`,
        transform: `translateX(${
          this.rotations[`${row},${col}`].col
        }px) translateY(${this.rotations[`${row},${col}`].row}px) rotateZ(${
          this.rotations[`${row},${col}`].rot
        }deg)`
        //zIndex: `${this.rotations[`${row},${col}`].zIndex}`
      };
    }
  }
};
</script>

<style scoped lang="less">
.gallery {
  margin-top: 50px;
  // transform: translateY(-50%) translateX(-50%);
  // width: 100%;
  // perspective: 1000px;

  &__row {
    display: flex;
    flex-wrap: wrap;

    + .gallery__row {
      margin-top: 50px;
    }

    &__image {
      text-align: center;
    }
  }
}

.gallery-display {
  .postcard {
    transform: none !important;
    cursor: pointer;
  }

  .postcard-transition {
    z-index: 1;
    transition: z-index 0.2s;
  }
}

.postcard {
  transform-style: preserve-3d;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 2.3px 70.9px rgba(0, 0, 0, 0.072), 0 6.8px 15.4px rgba(0, 0, 0, 0.01);
  overflow: hidden;
  margin: auto;
  transition: all 0.6s;
  position: relative;
  font-size: 18px;
  font-family: "Shadows Into Light", cursive;
  border-radius: 4px;

  &-front {
    background-color: floralwhite;
    padding-top: 20px;
    height: 100%;
    width: 100%;
    // z-index: 0;
  }
  &-back {
    background-color: floralwhite;
    padding-top: 20px;
    height: 100%;
    width: 100%;
    // z-index: 1;
    .back {
      width: 100%;
      height: 100%;
      background: #0000;
      // transform: rotateY(180deg);
      .box-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
@keyframes move01 {
  1% {
    opacity: 1;
  }
  25% {
    transform: rotateY(0);
  }
  62% {
    opacity: 1;
  }
  62.5% {
    transform: rotateY(90deg);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes move02 {
  48% {
    opacity: 0;
  }
  49% {
    opacity: 1;
  }
  62% {
    opacity: 1;
  }
  50% {
    transform: rotateY(90deg);
  }
  70% {
    transform: rotateY(180deg);
    opacity: 1;
  }
  75% {
    transform: rotateY(270deg);
    opacity: 1;
  }
  100% {
    transform: rotateY(360deg);
    opacity: 1;
  }
}
.overlay {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 50%;
  right: 50%;
  top: 50%;
  bottom: 50%;
  margin: -50vh -50vw -50vh -50vw;
  background-color: black;
  opacity: 0.5;
}

body {
  height: 100vh;
  max-width: 1200px;
  margin: auto;
  background-color: aliceblue;
}
.postcard-front {
  width: 100%;
  height: 100%;
  position: absolute;
}
.postcard-back {
  width: 100%;
  height: 100%;
  position: absolute;
}
.postcard .postcard-front:hover {
  animation: move01 2s linear forwards;
}
.postcard:hover .postcard-back {
  animation: move02 1.5s 0.5s linear forwards;
}
.postcard .postcard-front:over {
  animation: move01 2s linear forwards;
}
.postcard:over .postcard-back {
  animation: move02 1.5s 0.5s linear forwards;
}
.postcard-transition {
  z-index: 3;
  transition: all 0.2s;
  // animation-name: front;
  // animation-duration: 3s;
  // animation-iteration-count: 1;
  // animation-fill-mode: forwards;
}
@keyframes front {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}

.back {
  backface-visibility: hidden;
}
</style>
