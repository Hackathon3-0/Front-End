import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { BACKEND_URL } from '../env';
import { updateTeacher, updateToken, updateUser } from '../redux/teacherSlice';


const teacherRegister = async (values) => {
    const data ={
        name:values.name,
        email:values.email,
        password:values.password
    }
    try {
        const response = await fetch(`${BACKEND_URL}/api/v1/teachers/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const result = await response.json()
        console.log(result)
        if(result.status == "success"){
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Başarılı',
                textBody: 'Kayıt Başarılı',
              })
        }
        else{
            Toast.show({
                type: ALERT_TYPE.WARNING,
                title: 'Hata',
                textBody: 'Kayıt Başarısız',
              })
        }

    }catch(error){
        console.log(error)
    }

}

const teacherLogin = async (values,dispatch) => {
    const data ={
        email:values.email,
        password:values.password
    }
    try {
        const response = await fetch(`${BACKEND_URL}/api/v1/teachers/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const result = await response.json()
        console.log(result)
        if(result.success){
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Başarılı',
                textBody: 'Giriş Başarılı',
              })
            
            dispatch(updateTeacher(result.teacher))
            dispatch(updateToken(result.accessToken))
        }
        else{
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Hata',
                textBody: 'Giriş Başarısız',
              })
        }

    }catch(error){
        console.log(error)
    }
}

export { teacherRegister ,teacherLogin}