export const feedbackFormData =  {
  initialValues: {
    name: "",
    email: "",
    phone: "",
    town: "",
    service: [],
    comment: ""
  },
  inputs: [
    {
      name: "name",
      type: "text",
      placeholder: "Ім'я та прізвище"
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email"
    },
    {
      name: "phone",
      type: "text",
      placeholder: "Номер телефону"
    },
    {
      name: "town",
      type: "text",
      placeholder: "Місто"
    },
    {
      name: "service",
      type: "checkbox",
      placeholder: "Вибір послуги",
      options: [
        "Лазерна позірка металів та інших матеріалів",
        "Лазерне гравіювання",
        "Порошкове фарбування",
        "Склоструменева та піскоструменева обробка",
        "Шліфування та турбогалтування",
        "Ультрафіолетовий Друк"
      ]
    },
    {
      name: "comment",
      type: "textarea",
      placeholder: "Коментар"
    }
  ]
}
