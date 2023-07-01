<template>
    <div>
        <h2>アカウントを登録</h2>
        <!-- ======= 👇 ここから変更する ======= -->
        <form @submit.prevent="signUp">
            <!-- ====== 👆 ここまで変更する ======= -->
            <input type="text" required placeholder="名前" v-model="name">
            <input type="email" required placeholder="メールアドレス" v-model="email" autocomplete="off">
            <input type="password" required placeholder="パスワード" v-model="password" autocomplete="off">
            <input type="password" required placeholder="パスワード（確認用）" v-model="passwordConfirmation" autocomplete="off">
            <div class="error">{{ error }}</div>
            <button>登録する</button>
        </form>
    </div>
</template>
  
<!-- ...省略 -->
<script>
import axios from 'axios'
import setItem from '../auth/setItem'

export default {
    // ======= 👇 ここから追加する =======
    emits: ['redirectToChatRoom'],
    // ======= 👆 ここまで追加する =======
    data() {
        return {
            name: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            error: null
        }
    },
    methods: {
        async signUp() {
            this.error = null

            try {
                const res = await axios.post('http://localhost:3000/auth', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.passwordConfirmation
                }
                )

                if (!res) {
                    throw new Error('アカウントを登録できませんでした')
                }

                // ======= 👇 ここから追加する =======
                if (!this.error) {
                    setItem(res.headers, res.data.data.name)

                    this.$emit('redirectToChatRoom')
                }
                // ======= 👆 ここまで追加する =======

                console.log({ res })

                return res
            } catch (error) {
                this.error = 'アカウントを登録できませんでした'
            }
        }
    }
}
</script>
<!-- ...省略 -->
