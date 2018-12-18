# Vuexplosive Modal 🔥

> A simple Vue modal component with an explosion effect

## Install

```js
npm install vuexplosive-modal --save
```

## Usage

```html
<VuexplosiveModal :visible="showModal"></VuexplosiveModal> 
<button @click="toggleModal">Open Modal</button>
```

```js
import VuexplosiveModal from "./VuexplosiveModal"

export default {
  components: {
    VuexplosiveModal
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    toggleModal() {
      this.show = !this.show;
    }
  }
};
```


## Props

```js
props: {
    visible: {
      default: false
    },
    title: {
      default: "Boo! 🔥"
    },
    closeIcon: {
      default: `<span>❌</span>`
    },
    content: {
      default: `<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet a tenetur delectus reprehenderit, omnis doloremque at earum officia unde sequi accusantium corporis praesentium deserunt laboriosam dignissimos voluptatum culpa molestiae ullam. 👻</p>`
    },
    footer: {
      default: `<button>I do nothing!</button>`
    }
  },
```
