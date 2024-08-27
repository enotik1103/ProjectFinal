import axios from "axios";

export default {
    state: {
        token: null,
        userId: null,
        user: {
            email: '',
            password: '',
        }
    },
    mutations: {
        //
    },
    actions: {
        requestPost() {
            axios.post('auth/signin', {
                formData: {
                    email: this.email,
                    password: this.password,
                }

            })
                .then((response) => {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('userId', response.data.userId);
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        closeModal() {
            this.$emit('closeModal');
        },
    },

}