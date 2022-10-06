import { useLang } from "../contexts/LangContext";

type translations = {
    general: {
        login: string,
        logout: string,
        register: string,
        home: string,
        about: string,
        privacy_policy: string,
        contact: string,
    },navbar: {
        title: string
    }
}

const en: translations = {
    general: {
        login: "Login",
        logout: "Logout",
        register: "Register",
        home: "Home",
        about: "About Us",
        privacy_policy: "Privacy Policy",
        contact: "Contact"
    },
    navbar: {
        title: "Tech Test",
    }
}


const useLocales = () => {
    const {lang} = useLang();
    return en
}

export default useLocales;