<template>
        <v-app>
            <v-content>
                <v-container class="fill-height" fluid>
                    <v-row  justify="center">
                        <v-col cols="8" md="8">
                            <v-card>
                                <v-row>
                                    <v-col cols="5">
                                    </v-col>
                                    <v-col cols="6" >
                                        <div class="header" >
                                            <div id="title">
                                                Login to start
                                            </div>
                                            <div id="tagline">
                                                to be awesome
                                            </div>
                                        </div>
                                        <div class="form">
                                            <v-text-field
                                                v-model="form.email"
                                                label="Email"
                                                filled
                                                rounded
                                                prepend-inner-icon="mdi-human-male"
                                            ></v-text-field>
                                            <v-text-field
                                                v-model="form.password"
                                                label="Password"
                                                filled
                                                rounded
                                                dense
                                                prepend-inner-icon="mdi-shield-lock"
                                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                                :type="show1 ? 'text' : 'password'"
                                                @click:append="show1 = !show1"
                                            ></v-text-field>
                                            <v-checkbox v-model="checkbox" style="margin-top : -10px">
                                                <template v-slot:label>
                                                    <div>
                                                        Remember Login
                                                    </div>
                                                </template>
                                                </v-checkbox>
                                                <v-btn @click="login()" block color="warning" class="elevation-0" height=40>Login</v-btn>
                                        </div>
                                    </v-col>
                                    
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-content>
        </v-app>
</template>

<script>
export default {
    data(){
        return {
            form : {
                email: null, 
                password: null,
            },
            user : new FormData,
        }
    },
    methods:{
        login(){
            var url = this.$apiUrl + '/auth'
            this.user = new FormData()
            this.user.append('email',this.form.email);
            this.user.append('password',this.form.password);
            this.$http.post(url,this.user).then(response =>{
                if(response.data.token){
                    localStorage.setItem("token" , response.data.token)
                this.$router.push({ name : "UserController"})
                }else{
                    alert('gagal login')
                }
            })
        }
    }

}
</script>

<style>
.header{
    margin-left: 75px;
    margin-top: 200px;
    margin-bottom: -30px;
    color: #000000;
    /* margin-bottom: 690px;
    margin-right: 654px; */
}
#title{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 37px;
}
#tagline{
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 33px;
}
.form{
    margin-left: 76px;
    margin-top: 100px;
    margin-bottom: 120px;
    color: rgba(0, 0, 0, 0.54);
}
</style>