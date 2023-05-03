<template>
    <div class="container" id="main__cont">
        <div id="info__cont">
            <img
                    src="../components/img/icon/user_logo.png"
                    class="user-icon">
            <div>
                <dnlkk-space-text :display-text="'Логин'"
                                  :data="login"/>
                <dnlkk-space-text :display-text="'Фио'"
                                  :data="fullname"/>
                <dnlkk-space-text :display-text="'Почта'"
                                  :data="email"/>
                <dnlkk-space-text
                        :display-text="'Дата рождения'"
                        :data="formatDate(birthDate)"/>
                <dnlkk-space-text :display-text="'Паспорт'"
                                  :data="passport"/>
            </div>
        </div>
        <dnlkk-dialog v-model:show="dialogVisible">
            <user-editor @close="dialogVisible = false"/>
        </dnlkk-dialog>
        <dnlkk-button
                @click="showDialog"
                style="margin: 1% 0 0 0"
                type="button"
                class="btn btn-itm-color btn-lg">
            Редактировать данные
        </dnlkk-button>
        <hr style="color:red"/>
    </div>
</template>

<script>
import {mapState} from "vuex";
import UserEditor from "@/components/UserEditor.vue";

export default {
    name: "PersonalCabinet",
    components: {UserEditor},
    data() {
        return {
            dialogVisible: false
        }
    },
    methods: {
        showDialog() {
            this.dialogVisible = true
        }
    },
    computed: {
        ...mapState({
            fullname: state => {
                let named = state.self.name.trim()
                named = named.charAt(0).toUpperCase() + named.substring(1)

                let surnamed = state.self.surname.trim()
                surnamed = surnamed.charAt(0).toUpperCase() + surnamed.substring(1)

                let patronymiced = state.self.patronymic.trim()
                patronymiced = patronymiced.charAt(0).toUpperCase() + patronymiced.substring(1)

                return `${named} ${surnamed} ${patronymiced}`.trim()
            },
            login: state => state.self.username,
            birthDate: state => state.self.birthday,
            passport: state => state.self.document,
            email: state => state.self.email
        })
    }
}
</script>

<style scoped>
#main__cont {
	margin: 1% auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

#info__cont {
	word-break: break-word;
}

@media (max-width: 2560px) {
	.user-icon {
		width: 256px;
		height: 256px;
	}

	#info__cont {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
}

@media (max-width: 600px) {
	.user-icon {
		width: 128px;
		height: 128px;
	}

	#info__cont {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
}

</style>