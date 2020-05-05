<template>
    <div class="cardio">
     <section class="hero is-danger is-bold is-fullheight">
        <div class="hero-body" style="display: inline-block;">
            <div class="title has-text-centered"><center>Exercise</center></div>
            <div class="container level-item">
                 <div class="box"> 

                     <label class="label">Local Weather</label>
                    <div class="field has-addons">
                        <div class="control">
                            <input class="input" type="text" placeholder="Search..." v-model="query">
                        </div> 
                        <div class="control">
                            <a class="button is-danger is-outlined" @click="fetchWeather">
                            Search
                            </a>
                        </div> 
                     </div> 
                     

                    <!-- <transition name="fade">
                    <div class="notification has-text-centered has-background-dark has-text-white" v-if="typeof weather.main != 'undefined'">
                        <div class="level-item title">{{ weather.name }}, {{ weather.sys.country }}</div>
                        <p class="level-item content">{{ dateBuilder() }}</p>
                        <hr>
                        <div class="level-item title is-4">{{ Math.round(weather.main.temp) }}°F</div>
                        <div class="level-item">{{ weather.weather[0].main }}</div>
                    </div>
                    </transition> -->

                    <label class="label"><center>Type of Exercise</center></label>
                    <div class="field">
                        <div class="select is-danger">
                        <select v-model="type">
                            <option>Hiking</option>
                            <option>Running</option>
                            <option>Walking</option>
                            <option>Cycling</option>
                            <option>Rowing</option>
                        </select>
                        </div>
                    </div>

                    <label class="label"><p><center>Calories</center></p></label>
                    <div class="field">
                        <div class="control">
                            <input class="input is-danger" type="number" placeholder="0" v-model.number="calories">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button is-danger" @click="addExercise">Submit</button>
                        </div>
                    </div>

                    <Timer v-on:send-time="setTime"></Timer>

                    

                </div>
            </div>
        </div>
     </section>
    </div> 
</template>
