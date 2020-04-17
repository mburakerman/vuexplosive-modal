# Vuexplosive Modal 🔥

> A simple Vue modal component with an explosion effect

## Install

<a href="https://nodei.co/npm/vuexplosive-modal/"><img src="https://nodei.co/npm/vuexplosive-modal.png?mini=true"></a>

```js
npm install vuexplosive-modal --save
```

## Usage

```html
<VuexplosiveModal :visible="showModal"></VuexplosiveModal> 
<button @click="showModal = !showModal">Open Modal</button>
```

```js
import VuexplosiveModal from "vuexplosive-modal"

export default {
  components: {
    VuexplosiveModal
  },
  data() {
    return {
      showModal: false
    };
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
```

## License
Licensed under the MIT License

