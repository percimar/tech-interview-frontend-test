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
        submit: string,
    },
    auth: {
        username: string,
        password: string,
        confirm_password: string,
        field_is_required: string,
        username_must_be_at_least_4_characters: string,
        username_cannot_exceed_16_characters: string,
        password_must_be_at_least_8_characters: string,
        passwords_do_not_match: string,
        account_created: string,
        invalid_username_or_password: string,
    },
    home: {
        delete: string,
        select: string,
        fetching_failed: string,
        something_went_wrong: string,
    },
    navbar: {
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
        contact: "Contact",
        submit: "Submit"
    },
    auth: {
        username: "Username",
        password: "Password",
        confirm_password: "Confirm Password",
        field_is_required: "This field is required",
        username_must_be_at_least_4_characters: "Username must be at least 4 characters",
        username_cannot_exceed_16_characters: "Username cannot exceed 16 characters",
        password_must_be_at_least_8_characters: "Password must be at least 8 characters",
        passwords_do_not_match: "Passwords do not match",
        account_created: "Account created successfully, you may now login.",
        invalid_username_or_password: "Invalid username or password",
    },
    home: {
        delete: "Delete",
        select: "Select",
        fetching_failed: "Failed to fetch data, please try again later.",
        something_went_wrong: "Something went wrong, please try again later.",
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