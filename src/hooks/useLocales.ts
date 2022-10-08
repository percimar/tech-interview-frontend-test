import { useLang } from "../contexts/LangContext";
import ar from "../locales/ar";
import en from "../locales/en";

const useLocales = () => {
    const {lang} = useLang();
    return lang === "en" ? en : ar;
}

interface Translations {
    general: {
        login: string,
        logout: string,
        register: string,
        home: string,
        about: string,
        privacy_policy: string,
        contact: string,
        submit: string,
        something_went_wrong: string,
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
        edit_user: string,
        change_password: string,
        role: string,
        registered_date: string,
        user_updated_successfully: string,
        password_changed_successfully: string,
        update_user_details: string,
        update_password: string,
    },
    navbar: {
        title: string,
        switch_language: string,
    }
}

export default useLocales;
export type {Translations};