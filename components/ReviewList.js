app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  `
  <div class="review-container">
  <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }}
        <br>
        {{ review.rating }} *
        <br/>
        "{{ review.review }}"
        <br/>
        Recommended: {{ review.recommend }}
      </li>
    </ul>
  </div>
`
})