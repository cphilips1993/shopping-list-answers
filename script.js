// first function is to preventDefault, then to store the value that user submits as the const "item"
$(function() {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const item = $(this).find('input[name="shopping-list-entry"]').val();
    $(".shopping-list").append(`<li><span class="shopping-item">${item}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`)});
// (do i need to figure out how to remove the text inputted into the add item box after "add item" is clicked?)

/* below, i want to add the class ".shopping-item__checked" to a shopping-item-toggle button is pressed */
$(".shopping-list").on("click", ".shopping-item-toggle", function()  {
    const checked = $(this);
    const notChecked = $(".shopping-item__checked").$not(checked);
    check.toggleClass('shopping-item__checked'); 
  });

  $(".shopping-list").on("click", ".shopping-item-delete", function (event) {
    this.closest("li").remove()
  })


});
/* i want to delete the item when the shopping-item-delete button is pressed
*/




/*
.shopping-item
.shopping-list-entry
.shopping-item__checked
button class="shopping-item-toggle"
*/



/*  $(".shopping-list").click(function()  {
    const checked = $(this);
    const notChecked = $(".shopping-item__checked").$not(checked);
    check.toggleClass('shopping-item__checked'); 
  }); */
