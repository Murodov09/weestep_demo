<template>
  <div class="contact_div">
    <div class="contact_divs">
      <p>contacts</p>
    </div>
    <div class="contact_divs">
      <ul>
        <li>weestep sp. z o.o.</li>
        <li>
          Wolka Kosowska, ul. Nadrzeczna 16,Hala1, lok. C026. 05-552 Jablonowo.
          Poland.+48728888569 (Viber, WhatsApp)
        </li>
        <li>sale@weestep.pl</li>
      </ul>

      <div class="message_form">

        <h1>Напишите нам, мы ответим как можно скорее!</h1>

          <div class="wave-group">
      <input required="" type="text" class="input">
      <span class="bar"></span>
      <label class="label">
        <span class="label-char" style="--index: 0">N</span>
        <span class="label-char" style="--index: 1">a</span>
        <span class="label-char" style="--index: 2">m</span>
        <span class="label-char" style="--index: 3">e</span>
      </label>
    </div>
    
    <div class="wave-group">
      <input required="" type="email" class="input">
      <span class="bar"></span>
      <label class="label">
        <span class="label-char" style="--index: 0">E</span>
        <span class="label-char" style="--index: 1">m</span>
        <span class="label-char" style="--index: 2">a</span>
        <span class="label-char" style="--index: 3">i</span>
        <span class="label-char" style="--index: 4">l</span>
      </label>
    </div>
    
    <div class="wave-group">
      <input required="" type="email" class="input">
      <span class="bar"></span>
      <label class="label">
    
        <span class="label-char" style="--index: 1">M</span>
        <span class="label-char" style="--index: 2">e</span>
        <span class="label-char" style="--index: 3">s</span>
        <span class="label-char" style="--index: 4">s</span>
        <span class="label-char" style="--index: 5">a</span>
        <span class="label-char" style="--index: 6">g</span>
        <span class="label-char" style="--index: 7">e</span>
      </label>
    </div>

    <button class="btn btn-ghost">Submit</button>
      </div>


    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>

h1{
    width: 566px;
height: 78px;
font-family: 'Weestep',sans-serif;
font-size: 26px;
font-weight: 700;
line-height: 39px;
text-align: left;

color: #000000;


}
p{
    width: 488px;
height: 100px;
font-family: 'Weestep',sans-serif;
font-size: 120px;
font-weight: 700;
line-height: 100px;
letter-spacing: -0.015em;
text-align: left;
color: #FF7C2A;


}
.contact_div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-top: 66px;
}

.contact_divs {
  width: 45%;
  height: 100%;

}
.contact_divs:last-child {
  display: flex;
  flex-direction: column;


}
.contact_divs:first-child {
  display: flex;
  justify-content: center;
  align-items: center;

}
.contact_divs:last-child ul{

    display: flex;
    flex-direction: column;
}
ul li:first-child{
height: 66px;
font-family: 'Weestep',sans-serif;
font-size: 44px;
font-weight: 700;
line-height: 66px;
text-align: left;
color: #000000;

}
ul li:nth-child(2){
    width: 388px;
height: 90px;
font-family: 'Weestep',sans-serif;
font-size: 20px;
font-weight: 400;
line-height: 30px;
text-align: left;
color: #000000;

}
ul li:last-child{
    width: 204px;
height: 39px;
font-family: 'Weestep',sans-serif;
font-size: 26px;
font-weight: 700;
line-height: 39px;
text-align: left;
color: #FF7C2A;
}

.wave-group {
  position: relative;
}

.wave-group .input {
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 566px;
  border: none;
  border-bottom: 1px solid #515151;
  background: transparent;
}

.wave-group .input:focus {
  outline: none;
}

.wave-group .label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  display: flex;
}

.wave-group .label-char {
  transition: 0.2s ease all;
  transition-delay: calc(var(--index) * .05s);
}

.wave-group .input:focus ~ label .label-char,
.wave-group .input:valid ~ label .label-char {
  transform: translateY(-20px);
  font-size: 14px;
  color: #FF7C2A;
}

.wave-group .bar {
  position: relative;
  display: block;
  width: 566px;
}

.wave-group .bar:before,.wave-group .bar:after {
  content: '';
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #FF7C2A;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.wave-group .bar:before {
  left: 50%;
}

.wave-group .bar:after {
  right: 50%;
}

.wave-group .input:focus ~ .bar:before,
.wave-group .input:focus ~ .bar:after {
  width: 50%;
}

.btn{
    background: #FF7C2A;
    width: 567px;
    height: 61px;
}


.message_form{
    display: flex;
    flex-direction: column;
    gap: 40px;
}

</style>
