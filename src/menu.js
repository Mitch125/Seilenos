const menu = document.createElement('div');
menu.classList.add('tab_display', 'tab_display_menu');
menu.innerHTML = `<div class="overlay">
</div>
<div class='menutext'>

<p> 
These are the menus:</p>
<ul> 
    <li><a href="Fish.pdf">Fish Menu</a></li>
    <li><a href="Meats.pdf">Meat Menu</a></li>
    <li><a href="Vegetarian.pdf">Vegetarian Menu</a></li>
</div>
`;
export { menu };
