import { Translations } from "../hooks/useLocales";

// Obtained through Google Translate, no accuracy guaranteed 
const ar: Translations = {
    general: {
        login: "تسجيل الدخول",
        logout: "تسجيل خروج",
        register: "يسجل",
        home: "الرئيسية",
        about: "معلومات عنا",
        privacy_policy: "سياسة الخصوصية",
        contact: "اتصل بنا",
        submit: "تقديم النموذج",
        something_went_wrong: "هناك شئ خاطئ، يرجى المحاولة فى وقت لاحق",
        not_found: "الصفحة غير موجودة",
        back_to_home: "العودة للصفحة الرئيسية",
    },
    auth: {
        username: "اسم االمستخدم",
        password: "كلمه السر",
        confirm_password: "تأكيد كلمه السر",
        field_is_required: "هذه الخانة مطلوبه",
        username_must_be_at_least_4_characters: "يجب أن يتكون اسم المستخدم من 4 أحرف على الأقل",
        username_cannot_exceed_16_characters: "لا يمكن أن يتجاوز اسم المستخدم 16 حرفًا",
        password_must_be_at_least_8_characters: "يجب أن تكون كلمة السر 8 أحرف على الأقل",
        passwords_do_not_match: "كلمة السر غير مطابقة",
        account_created: "تم إنشاء الحساب بنجاح ، يمكنك الآن تسجيل الدخول",
        invalid_username_or_password: "خطأ في اسم المستخدم أو كلمة سر",
    },
    home: {
        delete: "حذف",
        select: "يختار",
        fetching_failed: "فشل إحضار البيانات ، يرجى المحاولة مرة أخرى في وقت لاحق.",
        edit_user: "تحرير العضو",
        change_password: "غير كلمة السر",
        role: "وظيفة",
        registered_date: "تاريخ التسجيل",
        user_updated_successfully: "تم تحديث المستخدم بنجاح",
        password_changed_successfully: "تم تغيير كلمة السر بنجاح",
        update_user_details: "تحديث تفاصيل المستخدم",
        update_password: "تطوير كلمة السر",
    },
    navbar: {
        title: "اختبار تقني",
        switch_language: "View this app in English",
    }
}

export default ar;