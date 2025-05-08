import { catalogData } from "./data.js";

const catalogList = document.querySelector(".catalog__goods_list");
const checkboxes = document.querySelectorAll(".checkbox");
const showMoreBtn = document.querySelector(".catalog__show-more");

let filteredData = [...catalogData];
let showGoodsCounter = 0;

export function catalogRender(arr) {
  let list = "";

  arr.forEach((item) => {
    list += `<li class="catalog__goods_list-item">
              <p class="catalog__goods_rating">${item.rating}</p>
              <h3 class="catalog__goods_title">${item.title}</h3>
              <p class="catalog__goods_price">${item.price}</p>
               <div class="catalog__goods_img-content"><img
                class="catalog__goods_img"
                src=${item.img}
                alt=""
              />
            <span class="catalog__goods_list-discount" >-50% </span>
           </div>
            </li>`;
    catalogList.innerHTML = list;
  });
}

export function changeCatalog() {
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const selectedRanges = Array.from(checkboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => ({
          min: +checkbox.dataset.min,
          max: +checkbox.dataset.max,
        }));

      filteredData = catalogData.filter(
        (item) =>
          selectedRanges.length === 0 ||
          selectedRanges.some(
            (range) => item.price >= range.min && item.price <= range.max
          )
      );

      showGoodsCounter = 0;
      catalogRender(filteredData);
    });
  });
}

showMoreBtn.addEventListener("click", () => {
  showGoodsCounter += 6;

  catalogRender(filteredData.slice(0, showGoodsCounter + 6));
});
