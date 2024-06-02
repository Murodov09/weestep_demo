<template>
    <nav>
       <div >
        <a href="#/" class="btn btn-ghost" id="logo_btn"> <img src="./img/logo.svg" alt=""></a>
       
        <p></p>
       </div> 
       <div class="lang_div">

           <ul>
            <li><a href="#/about">О нас</a></li>
            <li><a href="#/catalog">Каталог</a></li>
            <li><a href="#/where_buy">Где купить</a></li>
            <li><a href="#/blog">Блог</a></li>
            <li><a href="#/contact">Контакты</a></li>
                </ul>
                <select className="select select-info w-30 max-w-xs">
  <option>Eng</option>
  <option>Rus</option>
  <option>Uzb</option>
</select>
       </div>
    </nav>
    <router-view></router-view>
</template>
<script>
export default {
    
}
</script>
<style src="./Navbar.css">
    
</style>