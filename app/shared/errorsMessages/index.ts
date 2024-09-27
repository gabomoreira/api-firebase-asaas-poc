const errors = {
    required: {
      pt: 'O campo {{ field }} é obrigatório',
      en: 'The {{ field }} field is required',
    },
   
    string: {
        pt: 'O campo {{ field }} deve ser um texto',
        en: 'The {{ field }} field must be a string',
    },
    email: {
      pt: 'O campo {{ field }} deve ser um endereço de email válido',
      en: 'The {{ field }} field must be a valid email address',
    },
    min: {
      pt: 'O campo {{ field }} deve ter pelo menos {{ length }} caracteres',
      en: 'The {{ field }} field must be at least {{ length }} characters',
    },
    max: {
      pt: 'O campo {{ field }} não pode ter mais que {{ length }} caracteres',
      en: 'The {{ field }} field must not be more than {{ length }} characters',
    },
    min_value: {
      pt: 'O campo {{ field }} deve ser no mínimo {{ min }}',
      en: 'The {{ field }} field must be at least {{ min }}',
    },
    max_value: {
      pt: 'O campo {{ field }} deve ser no máximo {{ max }}',
      en: 'The {{ field }} field must be at most {{ max }}',
    },
    confirmed: {
      pt: 'A confirmação do campo {{ field }} não corresponde',
      en: 'The {{ field }} field confirmation does not match',
    },
    alpha: {
      pt: 'O campo {{ field }} só pode conter letras',
      en: 'The {{ field }} field may only contain alphabetic characters',
    },
    alpha_num: {
      pt: 'O campo {{ field }} só pode conter letras e números',
      en: 'The {{ field }} field may only contain alphabetic characters and numbers',
    },
    alpha_dash: {
      pt: 'O campo {{ field }} só pode conter letras, números, hífens e sublinhados',
      en: 'The {{ field }} field may only contain alphabetic characters, numbers, dashes, and underscores',
    },
    numeric: {
      pt: 'O campo {{ field }} deve conter apenas números',
      en: 'The {{ field }} field may only contain numeric characters',
    },
    length: {
      pt: 'O campo {{ field }} deve ter exatamente {{ length }} caracteres',
      en: 'The {{ field }} field must be exactly {{ length }} characters long',
    }
  };

  export default errors