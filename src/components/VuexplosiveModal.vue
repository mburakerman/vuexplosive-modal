<template>
  <div
    class="vuexplosive-modal"
    :class="{'vuexplosive-modal-hidden': !active, 'vuexplosive-modal-visible': active}"
    @keydown.esc=" active = false"
    :aria-hidden="modalToggle"
    tabindex="-1"
    role="dialog"
  >
    <transition name="scale">
      <div class="vuexplosive-modal-container" v-if="active">
        <div class="vuexplosive-modal-inner">
          <div class="vuexplosive-modal-header">
            <div class="vuexplosive-modal-title">{{title}}</div>
            <button
              class="vuexplosive-modal-close"
              @click="modalToggle"
              v-html="closeIcon"
              arial-label="close"
            ></button>
          </div>

          <div class="vuexplosive-modal-content" v-html="content"></div>

          <div class="vuexplosive-modal-footer" v-html="footer"></div>
        </div>
      </div>
    </transition>

    <div class="vuexplosive-modal-bg" @click="modalToggle">
      <img class="vuexplosive-modal-explosion-gif" :src="active ? explosionGifUrlBlob : '' " />
    </div>
  </div>
</template>


<script>
/* eslint-disable */
export default {
  name: "VuexplosiveModal",
  props: {
    visible: {
      default: false
    },
    title: {
      default: "🔥 Boo!"
    },
    closeIcon: {
      default: `<span>&#x274C;</span>`
    },
    content: {
      default: `<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet a tenetur delectus reprehenderit, omnis doloremque at earum officia unde sequi accusantium corporis praesentium deserunt laboriosam dignissimos voluptatum culpa molestiae ullam. 👻</p>`
    },
    footer: {
      default: `<button>I do nothing!</button>`
    }
  },
  data: function() {
    return {
      active: false,
      explosionGifUrl:
        "https://raw.githubusercontent.com/mburakerman/vuexplosive-modal/development/src/fire.gif",
      explosionGifUrlBlob: ""
    };
  },
  created() {
    fetch(this.explosionGifUrl)
      .then(response => response.blob())
      .then(images => {
        this.explosionGifUrlBlob = URL.createObjectURL(images);
      });
  },
  methods: {
    modalToggle() {
      this.active = !this.active;
    }
  },
  watch: {
    visible(oldVal, newVal) {
      this.active = !this.active;
    }
  }
};
</script>


<style scoped>
.vuexplosive-modal {
  font-family: -apple-system, BlinkMacSystemFont, "avenir next", avenir,
    "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial,
    sans-serif;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.8);
  text-align: left;
}
.vuexplosive-modal-container {
  background: #fff;
  max-width: 95%;
  width: 450px;
  height: auto;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999999;
  padding: 15px;
  border-radius: 5px;
}
.vuexplosive-modal-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.vuexplosive-modal-title {
  font-size: 30px;
  font-weight: bolder;
}
.vuexplosive-modal-close {
  align-self: flex-start;
  font-size: 18px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}
.vuexplosive-modal-content {
  font-size: 18px;
  color: #333;
}
.vuexplosive-modal-bg {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  z-index: 999;
}
.vuexplosive-modal-explosion-gif {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  min-width: 50%;
  min-height: 50%;
  opacity: 1;
  width: 100%;
  max-width: 100%;
  height: auto;
}
.vuexplosive-modal-footer {
  margin-top: 20px;
}
.vuexplosive-modal-hidden {
  display: none;
}
.vuexplosive-modal-visible {
  display: block;
}
.scale-enter-active {
  animation: bounce-in 0.3s;
}
.scale-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>