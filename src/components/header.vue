<template>
    <header>
        <ul>
            <li><router-link to='/'>item1</router-link></li>
            <li><router-link to='/item2'>item2</router-link></li>
            <li><router-link to='/item3'>item3</router-link></li>
        </ul>
    </header>
</template>

<style>
    header{background:red;width: 100%;height:40px;}
    ul{margin:0;padding:0;height:100%;}
    li{list-style: none;display:inline-block;border-right:1px solid #ffffff;width:33.333%;height:40px;line-height:40px;float:left;box-sizing: border-box;color:#ffffff;text-align:center;}
    li a{color:#ffffff;width:100%;height:100%;display:inline-block;}
</style>
