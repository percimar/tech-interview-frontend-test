import { Translations } from "../hooks/useLocales";

const en: Translations = {
    general: {
        login: "Login",
        logout: "Logout",
        register: "Register",
        home: "Home",
        about: "About Us",
        privacy_policy: "Privacy Policy",
        contact: "Contact",
        submit: "Submit",
        something_went_wrong: "Something went wrong, please try again later.",
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
        edit_user: "Edit User",
        change_password: "Change Password",
        role: "Role",
        registered_date: "Registeration Date",
        user_updated_successfully: "User updated successfully",
        password_changed_successfully: "Password changed successfully",
        update_user_details: "Update User Details",
        update_password: "Update Password",
    },
    navbar: {
        title: "Tech Test",
        switch_language: "اعرض هذا التطبيق باللغة العربية",
    }
}

export default en;