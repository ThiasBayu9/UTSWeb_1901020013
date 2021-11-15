app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: 
  /*html*/
  `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock </p>
        <p v-else>Out of Stock</p>

        <p>harga: {{ harge }}</p>

        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)" 
          class="color-circle" 
          :style="{ backgroundColor: variant.color }">
        </div>
        
        <button 
          class="button" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          v-on:click="addToCart">
          Add to Cart
        </button>
      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,
  data() {
    return {
        type: 'minuman',
        name: [
          { id: 2234, value: 'Fanta' },
          { id: 2235, value: 'CocaCola' },
          { id: 2236, value: 'aqua' },
        ],
        selectedVariant: 0,
        variants: [
          { id: 2234, color: 'red', image: './assets/images/fanta.png', quantity: 50 },
          { id: 2235, color: 'black', image: './assets/images/cocacola.png', quantity: 50 },
          { id: 2236, color: 'aqua', image: './assets/images/Aqua.png', quantity: 0 },
        ],
        harga: [
          { id: 2234, value: 5000 },
          { id: 2235, value: 6000 },
          { id: 2236, value: 3000 },
        ],
        reviews: []
    }
  },
  methods: {
      addToCart() {
          this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
      },
      updateVariant(index) {
          this.selectedVariant = index
      },
      addReview(review) {
        this.reviews.push(review)
      }
  },
  computed: {
      title() {
          return this.type + ' ' + this.name[this.selectedVariant].value
      },
      image() {
          return this.variants[this.selectedVariant].image
      },
      inStock() {
          return this.variants[this.selectedVariant].quantity
      },
      harge() {
        return this.harga[this.selectedVariant].value
      }
  }
})