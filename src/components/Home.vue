<template>
  <div class="home">
    <header>
      <h1>🔥 Vuexplosive Modal 🔥</h1>
      <p>A simple Vue modal component with an explosion effect</p>
    </header>
    

    <main>
      <h2>🕹️ Demo</h2>
      <button @click="toggleModal" class="open-modal-btn">Open Modal</button>
      <h2>📝 Usage</h2>
      <pre><code class="language-js">import VuexplosiveModal from "./VuexplosiveModal";</code></pre>
      <br>
      <pre><code class="language-js">&lt;VuexplosiveModal :visible="showModal">&lt;/VuexplosiveModal> </code></pre>
      <pre><code class="language-js">&lt;button @click="toggleModal">Open Modal&lt;/button></code></pre>
      <!--<a href="#" target="_blank">CodePen Demo</a>-->
      <h2>⏬ Install</h2>
      <pre><code class="language-js">npm i vuexplosive-modal --save</code></pre>
      <h2>⚙️Props</h2>
      <pre><code class="language-js"> visible: {
      default: false
    },
    title: {
      default: "Boo! 🔥"
    },
    closeIcon: {
      default: `&lt;span>❌&lt;/span>`
    },
    content: {
      default: `&lt;p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet a tenetur delectus reprehenderit, omnis doloremque at earum officia unde sequi accusantium corporis praesentium deserunt laboriosam dignissimos voluptatum culpa molestiae ullam. 👻&lt;/p>`
    }
    </code></pre>
      <h2>🐙 More</h2>
      <p>You can also customize the markup as you wish. Go <a href="https://github.com/mburakerman/vuexplosive-modal/" target="_blank">Github page</a> to see more details.</p>
      <VuexplosiveModal :visible="show"></VuexplosiveModal>
    </main>


    <footer>
      <p>&copy; <a href="https://mburakerman.github.io/" target="_blank" rel="external">Mehmet Burak Erman</a></p>
    </footer>
  </div>
</template>

<script>
/* eslint-disable */
import VuexplosiveModal from "./VuexplosiveModal";

export default {
  name: "Home",
  components: {
    VuexplosiveModal
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    toggleModal() {
      this.show = !this.show;
    }
  }
};
</script>


<style scoped>
header {
  text-align: center;
  margin-top: 20px;
}
@media (max-width: 567px) {
  header {
    text-align: left;
  }
}

header h1 {
  font-size: 40px;
  margin-bottom: 30px;
}

header p {
  font-size: 18px;
}

footer {
  text-align: center;
  color: #666;
}
footer a {
  color: #666;
}
main {
  margin: 20px 0px;
  padding: 20px 0px;
  border-top: 1px solid rgba(124, 14, 62, 0.1);
}
main h2 {
  color: rgba(245, 225, 128, 0.9);
  margin: 40px 0px 30px 0px;
  font-size: 30px;
  border-bottom: 1px dashed currentColor;
}
.open-modal-btn {
  color: #555;
  background: rgba(245, 225, 128, 0.9);
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  transition: all 0.3s;
  z-index: 66;
  border: none;
  cursor: pointer;
}
.open-modal-btn:hover {
  box-shadow: none;
}
</style>
