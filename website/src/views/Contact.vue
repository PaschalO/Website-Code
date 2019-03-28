<template>
    <div>
        <h1>This is a Contact Page</h1>
        <form @submit.prevent="onsubmit">
            <span>Phone Number: <a :href="`tel:${contactDetails[0].number}`">{{contactDetails[0].number}}</a></span>
            <span>Email: <a :href="`mailto:${contactDetails[0].emailAddress}`">{{contactDetails[0].emailAddress}}</a> </span>

            <base-input type="text"
                        placeholder="Subject"
                        v-model="contactDetails.subject"
            />

            <base-input type="text"
                        placeholder="Fullname"
                        v-model="contactDetails.fullname"
            />

            <base-input type="email"
                        placeholder="Email"
                        v-model="contactDetails.email"
            />

            <base-input type="tel"
                        placeholder="Phonenumber"
                        v-model="contactDetails.telephone"
            />

            <textarea v-model="contactDetails.message" placeholder="Write a message"></textarea>
            <base-button type="submit">submit</base-button>


        </form>
    </div>
</template>

<script>
    import BaseInput from "../components/BaseInput";
    import BaseButton from "../components/BaseButton";
    import { required, email } from 'vuelidate/lib/validators'

    export default {
        components: {BaseButton, BaseInput},

        data(){
           return {
               contactDetails:[
                   {
                       number: 6476061116,
                       emailAddress: 'xxx@gmail.com'
                   },
                   {
                       subject: '',
                       fullname: '',
                       email: '',
                       telephone: '',
                       message: ''
                   }
               ]
           }
        },

        validations: {
            contactDetails: {
                subject: {required},
                fullname: {required},
                email: {required, email},
                telephone: {required},
                message: {required}
            }
        },

        methods: {
            onSubmit(){

            }
        }
    }
</script>

<style>

</style>