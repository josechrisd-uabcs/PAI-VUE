

<template>
  <main>
    <div class="img-wrapper">
      <img 
        src="/img/login_image.jpeg" 
        alt=""
      >
    </div>
    <div class="container">
      <h1>Log in</h1>
      <div class="form-control">
        <label for="">Email</label>
        <input type="email" placeholder="email@example.com">
      </div>
      <div class="form-control">
        <label for="">Password</label>
        <input type="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;">
      </div>
      <button>Log in</button>
    </div>
  </main>
</template>

<style>
main{
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: stretch;
  min-height: 100vh;
}

.img-wrapper{
  width: 100%;
  flex: 1;
  overflow: hidden;
  position: relative;
}

.img-wrapper::after{
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.2);
}

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left;
}

.container{
  z-index: 10;
  box-shadow: 0px 0px 10px 3px #000;
  display: flex;
  flex-direction: column;
  gap: 1em;
  box-sizing: border-box;
  padding: 6em 2em;
}

.form-control{
  display: flex;
  flex-direction: column;
  gap: .2em;
}

input, button{
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  padding: 18px 18px;
  -webkit-transition: background-color 200ms ease, outline 200ms ease, color 200ms ease, -webkit-box-shadow 200ms ease;
  transition: background-color 200ms ease, outline 200ms ease, color 200ms ease, -webkit-box-shadow 200ms ease;
  transition: background-color 200ms ease, outline 200ms ease, color 200ms ease, box-shadow 200ms ease;
  transition: background-color 200ms ease, outline 200ms ease, color 200ms ease, box-shadow 200ms ease, -webkit-box-shadow 200ms ease;
  border-radius: 12px;
  outline: none;
  background-color: #fff;
  color: #eee;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-font-feature-settings: 'ss01';
  font-feature-settings: 'ss01';
  
  border-style: solid;
  height: 32px;
  border-width: 2px;
  border-color: #969696;
  background-color: #2f2d51;
  font-family: "Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

button{
  padding: 0;
  border: none;
  height: 36px;
  background-color: #645dde;
}

@media screen and (max-width: 720px) {
  main{
    grid-template-columns: 1fr;
    grid-template-rows: 30vh auto;
  }
}

input:focus, button:focus{
  box-shadow: 0 0 0 4px #8983ff3a;
  border-color: #827bff;

}
</style>
