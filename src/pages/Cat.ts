export function Cat() {
  const $content = document.querySelector(".main");
  //TODO: Separation html component
  $content.innerHTML = /*html*/ `
    <section class="cat">
      <article class="cat--description">
        <img src="https://placeimg.com/300/300/animals" alt="">
        <div>
          <h3>Bengal</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ea hic quas? Ex explicabo numquam quaerat qui perspiciatis iure dolores soluta ea? Suscipit atque recusandae nostrum, numquam ducimus cumque nesciunt!</p>
          <ul>
            <li><span>Temperament:</span> Alert, Agile, Energetic, Demanding, Intelligent</li>
            <li><span>Origin:</span> United States</li>
            <li><span>Life Span:</span> 12 - 15 years</li>
            <li>
              <span class="span">Adaptability:</span> 
              <hr><hr><hr><hr><hr>
            </li>
            <li>
              <span class="span">Affection level:</span> 
              <hr><hr><hr><hr><hr>
            </li>
            <li>
              <span class="span">Child friendly:</span> 
              <hr><hr><hr><hr><hr>
            </li>
            <li>
              <span class="span">Grooming:</span> 
              <hr><hr><hr><hr><hr>
            </li>
            <li>
              <span class="span">Intelligence:</span> 
              <hr><hr><hr><hr><hr>
            </li>
            <li>
              <span class="span">Health issues:</span> 
              <hr><hr><hr><hr><hr>
            </li>
            <li>
              <span class="span">Social needs:</span> 
              <hr class="active"><hr><hr><hr><hr>
            </li>
            <li>
              <span class="span">Stranger friendly:</span> 
              <hr><hr><hr><hr><hr>
            </li>
          </ul>
        </div>
      </article>

      <article class="cat--images">
        <h3>Other photos</h3>
        <div class="grid cat--grid">
          <img src="https://placeimg.com/250/200/animals" alt="">
          <img src="https://placeimg.com/250/200/animals" alt="">
          <img src="https://placeimg.com/250/200/animals" alt="">
          <img src="https://placeimg.com/250/200/animals" alt="">
          <img src="https://placeimg.com/250/200/animals" alt="">
          <img src="https://placeimg.com/250/200/animals" alt="">
          <img src="https://placeimg.com/250/200/animals" alt="">
          <img src="https://placeimg.com/250/200/animals" alt="">
        </div>
      </article>
    </section>
  `;

  return $content;
}
