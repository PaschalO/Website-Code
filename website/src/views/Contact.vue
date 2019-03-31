<template>
    <div>
        <h1>This is a Contact Page</h1>
        <form @submit.prevent="onSubmit">
            <span>Phone Number: <a :href="`tel:${contactDetails[0].number}`">{{contactDetails[0].number}}</a></span>
            <span>Email: <a :href="`mailto:${contactDetails[0].emailAddress}`">{{contactDetails[0].emailAddress}}</a></span>

            <base-input type="text"
                        placeholder="Enter a subject/title"
                        v-model.trim="contactDetails.title"
                        :class="{error: $v.contactDetails.title.$error}"
                        @blur="$v.contactDetails.title.$touch()">
            </base-input>
            <template v-if="$v.contactDetails.title.$error">
                <p v-if="!$v.contactDetails.title.required" class="error-message">This title field is required.</p>
            </template>

            <base-input type="text"
                        placeholder="Fullname"
                        v-model.trim="contactDetails.fullname"
                        :class="{error: $v.contactDetails.fullname.$error}"
                        @blur="$v.contactDetails.fullname.$touch()">
            </base-input>
            <template v-if="$v.contactDetails.fullname.$error">
                <p v-if="!$v.contactDetails.fullname.required" class="error-message">This name field is required.</p>
            </template>

            <base-input type="email"
                        placeholder="Email"
                        v-model.trim="contactDetails.email"
                        :class="{error: $v.contactDetails.email.$error}"
                        @blur="$v.contactDetails.email.$touch()">
            </base-input>
            <template v-if="$v.contactDetails.email.$error">
                <p v-if="!$v.contactDetails.email.required" class="error-message">This email field is required.</p>
                <p v-else-if="!$v.contactDetails.email.email" class="error-message">Please enter a valid email</p>
            </template>

            <base-input type="tel"
                        placeholder="Phonenumber"
                        v-model.number.trim="contactDetails.telephone"
                        @blur="$v.contactDetails.telephone.$touch()"
                        :class="{error: $v.contactDetails.telephone.$error}">
            </base-input>
            <template v-if="$v.contactDetails.telephone.$error">
                <p v-if="!$v.contactDetails.telephone.isPhone" class="error-message">Please enter a valid phone-number</p>
            </template>

            <textarea
                    v-model="contactDetails.message"
                    @blur="$v.contactDetails.message.$touch()"
                    :class="{error: $v.contactDetails.message.$error}"
                    placeholder="Write a message">
            </textarea>
            <template v-if="$v.contactDetails.message.$error">
                <p v-if="!$v.contactDetails.message.required" class="error-message">Please write some texts.</p>
            </template>

            <!--<base-button type="submit" :disabled="$v.$anyError">submit</base-button>-->
            <base-button type="submit">submit</base-button>
            <p v-if="$v.$error" class="error-message">{{submitted.message}}</p>
        </form>
    </div>
</template>

<script>
    import BaseInput from "../components/BaseInput";
    import BaseButton from "../components/BaseButton";
    import { required, email, helpers } from 'vuelidate/lib/validators'

    //const regexString = /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g;
    const regexString = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const isPhone =  (value) => !helpers.req(value) || regexString.test(value);

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
                       title: '',
                       fullname: '',
                       email: '',
                       telephone: '',
                       message: ''
                   }
               ],

               submitted: {
                   message: 'Please fill out all required fields in red'
               }
           }
        },

        validations: {
            contactDetails: {
                title: {required},
                fullname: {required},
                email: {required, email},
                telephone: {isPhone},
                message: {required}
            }
        },

        methods: {
            onSubmit(){
                this.$v.$touch();
                if (!this.$v.$invalid){  // if the form is valid then we can submit
                    // post it to the server for server validation
                    console.log(`Form is submitted, thanks!`);
                }
                else {
                    // an error in the form
                }
            }
        }
    }
</script>

<style>
    .error-message {
        color: red;
    }

    .error {
        border: 1px solid red;
    }
</style>