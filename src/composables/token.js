import { ref } from "vue";

export const TOKEN_STATUS = Object.freeze({
    EXPIRED: Symbol(),
    ACTIVE: Symbol(),
    UNEXISTENT: Symbol()
})

export function useToken () {
    const status = ref(null);
    const token = ref(null);
    const getToken = () => {
        const token_str = localStorage.getItem('token');
        if(!token_str){
            status.value = TOKEN_STATUS.UNEXISTENT;
        }
        try {
            const token_obj = JSON.parse(token_str);
            if(token_obj.expires_at && token_obj.request_token){
                if(new Date(token_obj.expires_at) < new Date()){
                    token.value = token_obj;
                    status.value = TOKEN_STATUS.ACTIVE;
                }else{
                    status.value = TOKEN_STATUS.EXPIRED;
                }
            }
        } catch (error) {
            localStorage.removeItem('token');
            status.value = TOKEN_STATUS.UNEXISTENT;
        }
    }
}